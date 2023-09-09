import { User } from '@/backend/core/entities';
import { UserRepository } from '@/backend/data/repositories/user-repository';
import { PrismaService } from '../prisma-service';

export class PrismaUserRepository implements UserRepository {
    constructor(private prismaService: PrismaService) {}

    async createUser(user: User): Promise<boolean> {
        const result = await this.prismaService.user.create({
            data: {
                username: user.username,
                password: user.password,
                roles: {
                    connect: {
                        id: user.roleId,
                    },
                },
            },
        });

        return result.id !== null;
    }

    async checkByUsername(username: string): Promise<boolean> {
        const exists = await this.prismaService.user.findUnique({
            where: {
                username,
            },
        });

        return exists !== null;
    }
}
