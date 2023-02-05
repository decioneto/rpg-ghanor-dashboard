import { Role, RoleProps } from '@/app/entities/role';
import { RoleNameEnum } from '@/enums/RoleEnum';

type Override = Partial<RoleProps>;

export function makeRole(override: Override = {}) {
    return new Role({
        roleName: RoleNameEnum.PLAYER,
    });
}
