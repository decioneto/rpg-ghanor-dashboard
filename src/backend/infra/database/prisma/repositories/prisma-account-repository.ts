import { User } from '@/backend/core/entities';
import { GetUserByUsernameRepository } from '@/backend/data/protocols/db/get-user-by-username';
import { PrismaUserMapper } from '@/backend/infra/mappers/prisma-user-mapper';
import { PrismaService } from '../prisma-service';

export class PrismaAccountRepository implements GetUserByUsernameRepository {
    constructor(private prismaService: PrismaService) {}

    async getUserByUsername(username: string): Promise<User> {
        const user = await this.prismaService.user.findUniqueOrThrow({
            where: {
                username,
            },
        });

        return PrismaUserMapper.toDomain(user);
    }
}
