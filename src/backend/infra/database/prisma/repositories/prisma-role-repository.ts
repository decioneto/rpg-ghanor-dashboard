import { RoleModel } from '@/backend/data/models';
import { RoleRepository } from '@/backend/data/repositories';
import { PrismaService } from '../prisma-service';

export class PrismaRoleRepository implements RoleRepository {
    constructor(private prismaService: PrismaService) {}

    async createRole(role: RoleModel): Promise<void> {
        this.prismaService.role.create({
            data: role,
        });
    }
}
