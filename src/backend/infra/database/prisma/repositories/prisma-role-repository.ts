import { RoleRepository } from '@/backend/data/repositories';
import { PrismaService } from '../prisma-service';

export class PrismaRoleRepository implements RoleRepository {
    constructor(private prismaService: PrismaService) {}

    async createRole(roleName: 'PLAYER' | 'MASTER'): Promise<void> {
        this.prismaService.role.create({
            data: {
                roleName,
            },
        });
    }
}
