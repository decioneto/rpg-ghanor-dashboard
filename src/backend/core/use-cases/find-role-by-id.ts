import { Role } from '../entities';

export interface FindRoleByIdUseCase {
    findById: (roleId: string) => Promise<Role>;
}
