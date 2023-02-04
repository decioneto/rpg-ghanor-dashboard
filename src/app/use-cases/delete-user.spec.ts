import { makeUser } from '@/test/factories/user-factory';
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { CreateUser } from './create-user';
import { DeleteUser } from './delete-user';

describe('Delete user', () => {
    it('should be able to delete a user', async () => {
        const userRepository = new InMemoryUserRepository();
        const deleteUser = new DeleteUser(userRepository);
        const createUser = new CreateUser(userRepository);

        const user = makeUser();

        await createUser.execute({
            username: user.username,
            password: user.password,
        });

        await deleteUser.execute({ userId: user.id });

        expect(userRepository.users).toHaveLength(0);
    });

    it('should not be able to delete a non existing user', async () => {
        const userRepository = new InMemoryUserRepository();
        const deleteUser = new DeleteUser(userRepository);
        const createUser = new CreateUser(userRepository);

        const user = makeUser();

        await createUser.execute({
            username: user.username,
            password: user.password,
        });

        expect(async () => {
            await deleteUser.execute({ userId: '123' });
        }).toThrowError;
    });
});
