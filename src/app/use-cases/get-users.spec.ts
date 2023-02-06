import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { GetUsers } from './get-users';

describe('Get users', () => {
    it('should be able to get all users', async () => {
        const userRepository = new InMemoryUserRepository();
        const getUsers = new GetUsers(userRepository);

        expect(await getUsers.execute()).toBeTruthy();
    });
});
