import { RoleNameEnum } from '@/enums/RoleEnum';
import { Role } from '../entities/role';

export interface RoleRepository {
    create(role: Role): Promise<void>;
    findByName(roleName: RoleNameEnum): Promise<Role | null>;
}
