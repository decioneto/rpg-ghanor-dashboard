import { RoleLevelEnum, RoleNameEnum } from '@/enums/RoleEnum';
import { Role } from '../../entities/role';
import { RoleRepository } from '../../repositories/role-repository';

interface CreateRoleRequest {
    roleName: RoleNameEnum;
}

interface CreateRoleReponse {
    role: Role;
}

export class CreateRole {
    constructor(private roleRepository: RoleRepository) {}

    async execute(request: CreateRoleRequest): Promise<CreateRoleReponse> {
        const { roleName } = request;
        let roleLevelGenerated: RoleLevelEnum;

        switch (roleName) {
            case RoleNameEnum.MASTER:
                roleLevelGenerated = RoleLevelEnum.MASTER;
                break;
            case RoleNameEnum.PLAYER:
                roleLevelGenerated = RoleLevelEnum.PLAYER;
                break;
        }

        const role = new Role({
            roleName,
            roleLevel: roleLevelGenerated,
        });

        await this.roleRepository.create(role);

        return {
            role,
        };
    }
}
