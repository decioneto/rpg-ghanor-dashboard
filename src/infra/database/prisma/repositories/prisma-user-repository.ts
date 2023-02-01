import { User } from '@/app/entities/user';
import { UserRepository } from '@/app/repositories/user-repository';
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
}
