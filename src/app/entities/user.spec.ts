import { User } from './user';

describe('User', () => {
    it('should be able to create a notification', () => {
        const user = new User({
            username: 'decioneto',
            password: '0123456',
        });

        expect(user).toBeInstanceOf(User);
    });
});
