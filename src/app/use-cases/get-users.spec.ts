import { makeUser } from '@/test/factories/user-factory';
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { GetUsers } from './get-users';

describe('Get users', () => {
    it('should be able to get all users', async () => {
        const userRepository = new InMemoryUserRepository();
        const getUsers = new GetUsers(userRepository);

        const newUser = await makeUser();

        userRepository.create(newUser);

        const { users } = await getUsers.execute();

        expect(users).toEqual(userRepository.users);
    });
});
