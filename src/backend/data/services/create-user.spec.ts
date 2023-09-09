import { User } from '@/backend/core/entities';
import { mockUser } from '@/backend/tests/mocks/entities/user-mock';
import { HasherSpy } from '@/backend/tests/mocks/protocols/mock-hasher';
import { InMemoryUserRepository } from '@/backend/tests/repositories/user-repository';
import { CreateUserService } from './create-user';

interface MakeUserProps {
    sut: CreateUserService;
    hasherRepository: HasherSpy;
    users: User[];
}

function makeUser(): MakeUserProps {
    const userRepository = new InMemoryUserRepository();
    const hasherRepository = new HasherSpy();
    const sut = new CreateUserService(userRepository, hasherRepository);
    const users: User[] = userRepository.users;

    return {
        sut,
        hasherRepository,
        users,
    };
}

describe('Create User', () => {
    it('should be able to create a user', async () => {
        const { sut, users } = makeUser();
        const { username, password, roleId } = mockUser();

        await sut.execute({
            username,
            password,
            roleId,
        });

        expect(users).toHaveLength(1);
    });

    it('should return false if username already exists', async () => {
        const { sut, users } = makeUser();
        const { username, password, roleId } = mockUser();

        users.push({
            username: 'test-name',
            password: '123',
            roleId: '1',
        });

        const result = await sut.execute({
            username,
            password,
            roleId,
        });

        expect(result).toEqual(false);
    });

    it('should call the hasher', async () => {
        const { sut, hasherRepository } = makeUser();
        const { username, password, roleId } = mockUser();

        await sut.execute({
            username,
            password,
            roleId,
        });

        expect(hasherRepository.plaintext).toBe(password);
    });
});
