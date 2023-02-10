import { RoleNameEnum } from '@/enums/RoleEnum';

export interface CreateRoleDTO {
    userId: string;
    roleName: RoleNameEnum;
}
