import { User } from '@/app/entities/user';
import { User as RawUser } from '@prisma/client';

export class PrismaUserMapper {
    static toDomain(raw: RawUser): User {
        return new User({
            id: raw.id,
            createdAt: raw.createdAt,
            username: raw.username,
            password: raw.password,
        });
    }
}
