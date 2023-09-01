import { CreateRoleUseCase } from '@/backend/core/use-cases';
import { RoleModel } from '../models';
import { RoleRepository } from '../repositories';

export class CreateRoleService implements CreateRoleUseCase {
    constructor(private roleReponsitory: RoleRepository) {}

    async create(role: RoleModel): Promise<void> {
        await this.roleReponsitory.createRole(role);
    }
}
