import { CreateRoleUseCase } from '@/backend/core/use-cases';
import { RoleModel, RoleNameEnumModel } from '../models';
import { RoleRepository } from '../repositories';

export class CreateRoleService implements CreateRoleUseCase {
    constructor(private roleReponsitory: RoleRepository) {}

    async create(roleName: RoleNameEnumModel): Promise<void> {
        const role: RoleModel = {
            roleName,
        };

        await this.roleReponsitory.createRole(role);
    }
}
