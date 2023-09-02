import { RoleNameEnum } from '@/backend/core/entities';
import { CreateRoleUseCase } from '@/backend/core/use-cases';
import { mockRole } from '../entities/role-mock';

export class CreateRoleSpy implements CreateRoleUseCase {
    params?: RoleNameEnum;
    result = mockRole();

    async create(roleName: RoleNameEnum): Promise<void> {
        this.params = roleName;
    }
}
