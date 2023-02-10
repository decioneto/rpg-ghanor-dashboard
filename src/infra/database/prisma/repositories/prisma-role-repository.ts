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
                userId: role.userId,
                createdAt: role.createdAt,
                roleLevel: role.roleLevel!,
                roleName: role.roleName,
            },
        });
    }

    async findByName(roleName: string): Promise<Role | null> {
        const role = await this.prismaService.role.findFirst({
            where: {
                roleName: roleName,
            },
        });

        if (!role) return null;

        return PrismaRoleMapper.toDomain(role);
    }
}
