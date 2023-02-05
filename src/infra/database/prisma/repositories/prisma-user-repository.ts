import { User } from '@/app/entities/user';
import { UserRepository } from '@/app/repositories/user-repository';
import { PrismaUserMapper } from '../mappers/prisma-user-mapper';
import { PrismaService } from '../prisma-service';

export class PrismaUserRepository implements UserRepository {
    constructor(private prismaService: PrismaService) {}

    async create(user: User): Promise<void> {
        await this.prismaService.user.create({
            data: {
                id: user.id,
                createdAt: user.createdAt,
                username: user.username,
                password: user.password,
            },
        });
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = await this.prismaService.user.findUnique({
            where: {
                username: username,
            },
        });

        if (!user) {
            return null;
        }

        return PrismaUserMapper.toDomain(user);
    }

    async deleteUser(userId: string): Promise<void> {
        await this.prismaService.user.delete({
            where: {
                id: userId,
            },
        });
    }
}
