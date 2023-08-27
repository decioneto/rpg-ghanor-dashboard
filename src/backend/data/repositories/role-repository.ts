import { RoleNameEnumModel } from '../models';

export interface RoleRepository {
    createRole: (roleName: RoleNameEnumModel) => Promise<void>;
}
