import { CreateRoleUseCase } from '@/backend/core/use-cases';
import { RoleRepository } from '../repositories';

export class CreateRoleService implements CreateRoleUseCase {
    constructor(private roleReponsitory: RoleRepository) {}

    async create(roleName: 'PLAYER' | 'MASTER'): Promise<void> {
        await this.roleReponsitory.createRole(roleName);
    }
}
