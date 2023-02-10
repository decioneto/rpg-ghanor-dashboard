import { makeUser } from '@/test/factories/user-factory';
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { FindUserByUsername } from './find-user-by-username';

describe('Find user by username', () => {
    it('should be able to find a user by username', async () => {
        const userRepository = new InMemoryUserRepository();
        const findUserByUsername = new FindUserByUsername(userRepository);

        const newUser = makeUser();

        await userRepository.create(newUser);

        const { user } = await findUserByUsername.execute({
            username: newUser.username,
        });

        expect(user.username).toEqual(newUser.username);
    });
});
