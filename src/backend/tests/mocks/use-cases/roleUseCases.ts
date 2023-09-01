import { Role } from '@/backend/core/entities';
import { CreateRoleUseCase } from '@/backend/core/use-cases';
import { mockRole } from '../entities/role-mock';

export class CreateRoleSpy implements CreateRoleUseCase {
    params?: Role;
    result = mockRole();

    async create(role: Role): Promise<void> {
        this.params = role;
    }
}
