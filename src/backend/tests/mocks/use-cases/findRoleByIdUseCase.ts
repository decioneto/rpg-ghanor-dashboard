import { Role } from '@/backend/core/entities';
import { FindRoleByIdUseCase } from '@/backend/core/use-cases/find-role-by-id';
import { mockRole } from '../entities/role-mock';

export class findRoleByIdSpy implements FindRoleByIdUseCase {
    params?: string;
    result = mockRole();

    async findById(roleId: string): Promise<Role> {
        this.params = roleId;
        return this.result;
    }
}
