import { RoleNameEnum } from '@/enums/RoleEnum';

export interface CreateUserDTO {
    username: string;
    password: string;
    roleName: RoleNameEnum;
}
