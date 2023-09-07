import { RoleModel } from '../models';

export interface RoleRepository {
    createRole: (role: RoleModel) => Promise<void>;
    findRoleById: (roleId: string) => Promise<RoleModel>;
}
