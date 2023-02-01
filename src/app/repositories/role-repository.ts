import { Role } from '../entities/role';

export interface RoleRepository {
    create(role: Role): Promise<void>;
}
