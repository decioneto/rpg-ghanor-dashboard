import { User } from '@/backend/core/entities';
import { GetUserByUsernameRepository } from '@/backend/data/protocols/db/get-user-by-username';
import { PrismaService } from '../prisma-service';

export class PrismaAccountRepository implements GetUserByUsernameRepository {
    constructor(private prismaService: PrismaService) {}

    async getUserByUsername(username: string): Promise<User> {
        const user = await this.prismaService.user.findUniqueOrThrow({
            where: {
                username,
            },
        });

        return P;
    }
}
