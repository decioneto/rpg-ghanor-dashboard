import { RoleModel } from '../models';

export interface RoleRepository {
    createRole: (role: RoleModel) => Promise<void>;
}
