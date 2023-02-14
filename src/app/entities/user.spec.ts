import { User } from './user';

describe('User', () => {
    it('should be able to create a user', () => {
        const user = new User({
            username: 'decioneto',
            password: '0123456',
            roleId: '123',
        });

        expect(user).toBeInstanceOf(User);
    });
});
