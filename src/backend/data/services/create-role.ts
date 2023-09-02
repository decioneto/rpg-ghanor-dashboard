import { CreateRoleUseCase } from '@/backend/core/use-cases';
import { InvalidParamError } from '@/backend/presentation/errors';
import { RoleModel, RoleNameEnumModel } from '../models';
import { RoleRepository } from '../repositories';

export class CreateRoleService implements CreateRoleUseCase {
    constructor(private roleReponsitory: RoleRepository) {}

    async create(roleName: RoleNameEnumModel): Promise<void> {
        if (roleName !== 'PLAYER' && roleName !== 'MASTER') {
            throw new InvalidParamError(roleName);
        }

        const role: RoleModel = {
            roleName,
        };

        await this.roleReponsitory.createRole(role);
    }
}
