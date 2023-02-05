import { Role } from '@/app/entities/role';
import { RoleRepository } from '@/app/repositories/role-repository';
import { PrismaService } from '../prisma-service';

export class PrismaRoleRepository implements RoleRepository {
    constructor(private prismaService: PrismaService) {}

    async create(role: Role): Promise<void> {
        await this.prismaService.role.create({
            data: {
                id: role.id,
                createdAt: role.createdAt,
                roleLevel: role.roleLevel,
                roleName: role.roleName,
            },
        });
    }
}
