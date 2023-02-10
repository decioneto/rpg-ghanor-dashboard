import { RoleNameEnum } from '@/enums/RoleEnum';
import { Role } from './role';
import { User } from './user';

describe('User', () => {
    it('should be able to create a notification', () => {
        const user = new User({
            username: 'decioneto',
            password: '0123456',
            role: new Role({
                roleName: RoleNameEnum.MASTER,
            }),
        });

        expect(user).toBeInstanceOf(User);
    });
});
