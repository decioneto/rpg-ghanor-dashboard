import { Role } from '@/backend/core/entities';
import { FindRoleByIdUseCase } from '@/backend/core/use-cases/find-role-by-id';
import { RoleRepository } from '../repositories';

export class FindRoleByIdService implements FindRoleByIdUseCase {
    constructor(private roleRepository: RoleRepository) {}

    async findById(roleId: string): Promise<Role> {
        return await this.roleRepository.findRoleById(roleId);
    }
}
