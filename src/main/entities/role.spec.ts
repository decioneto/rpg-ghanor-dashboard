import { RoleLevelEnum, RoleNameEnum } from '@/enums/RoleEnum';
import { Role } from './role';

describe('Role', () => {
    it('should be able to create a role', () => {
        const role = new Role({
            roleName: RoleNameEnum.MASTER,
            roleLevel: RoleLevelEnum.MASTER,
        });

        expect(role).toBeInstanceOf(Role);
    });
});
