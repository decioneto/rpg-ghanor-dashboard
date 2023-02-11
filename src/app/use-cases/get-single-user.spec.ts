import { makeUser } from '@/test/factories/user-factory';
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { GetSingleUser } from './get-single-user';

describe('Find user by username', () => {
    it('should be able to find a user by username', async () => {
        const userRepository = new InMemoryUserRepository();
        const getSingleUser = new GetSingleUser(userRepository);

        const newUser = await makeUser();

        await userRepository.create(newUser);

        const { user } = await getSingleUser.execute({
            userId: newUser.id,
        });

        expect(user).toEqual(newUser);
    });
});
