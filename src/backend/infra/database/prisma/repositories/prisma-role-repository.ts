import { RoleModel } from '@/backend/data/models';
import { RoleRepository } from '@/backend/data/repositories';
import { PrismaRoleMapper } from '@/backend/infra/mappers/prisma-role-mapper';
import { PrismaService } from '../prisma-service';

export class PrismaRoleRepository implements RoleRepository {
    constructor(private prismaService: PrismaService) {}

    async createRole(role: RoleModel): Promise<void> {
        await this.prismaService.role.create({
            data: {
                roleName: role.roleName,
            },
        });
    }

    async findRoleById(roleId: string): Promise<RoleModel> {
        const role = await this.prismaService.role.findUnique({
            where: {
                id: roleId,
            },
        });

        if (!role)
            throw new Error(
                `Não foi encontrado nenhum resultado pelo parâmetro ${roleId}`
            );

        return PrismaRoleMapper.toDomain(role);
    }
}
