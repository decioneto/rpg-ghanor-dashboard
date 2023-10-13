import { User } from '@prisma/client';

export interface GetUserByUsernameRepository {
    getUserByUsername: (username: string) => Promise<User>;
}
