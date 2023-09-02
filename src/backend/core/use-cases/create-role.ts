import { RoleNameEnum } from '../entities';

export interface CreateRoleUseCase {
    create: (roleName: RoleNameEnum) => Promise<void>;
}
