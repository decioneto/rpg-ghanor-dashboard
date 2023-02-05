import { Role } from '@/app/entities/role';
import { RoleRepository } from '@/app/repositories/role-repository';
import { PrismaRoleMapper } from '../mappers/prisma-role-mapper';
import { PrismaService } from '../prisma-service';

export class PrismaRoleRepository implements RoleRepository {
    constructor(private prismaService: PrismaService) {}

    async create(role: Role): Promise<void> {
        await this.prismaService.role.create({
            data: {
                id: role.id,
                createdAt: role.createdAt,
                roleLevel: role.roleLevel!,
                roleName: role.roleName,
            },
        });
    }

    async findRoleById(roleId: string): Promise<Role | null> {
        const role = await this.prismaService.role.findUnique({
            where: {
                id: roleId,
            },
        });

        if (!role) return null;

        return PrismaRoleMapper.toDomain(role);
    }
}
