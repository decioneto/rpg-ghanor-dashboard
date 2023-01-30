import { RoleLevelEnum, RoleNameEnum } from '@/enums/RoleEnum';
import { Role } from '../entities/role';
import { CreateRole } from './create-role';

describe('Create Role', () => {
    it('should be able to create a role', () => {
        const createRole = new CreateRole();

        expect(
            createRole.execute({
                roleName: RoleNameEnum.PLAYER,
                roleLevel: RoleLevelEnum.PLAYER,
            })
        ).resolves.toBeInstanceOf(Role);
    });
});
