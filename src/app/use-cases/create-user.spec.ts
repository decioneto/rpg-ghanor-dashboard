import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { CreateUser } from './create-user';

describe('Create User', () => {
    it('should be able to create a user', async () => {
        const userRepository = new InMemoryUserRepository();
        const createUser = new CreateUser(userRepository);

        const { user } = await createUser.execute({
            username: 'decioneeto',
            password: '12312',
        });

        expect(userRepository.users).toHaveLength(1);
        expect(userRepository.users[0]).toEqual(user);
    });
});
