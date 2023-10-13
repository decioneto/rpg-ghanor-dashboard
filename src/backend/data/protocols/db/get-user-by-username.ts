import { User } from "@/backend/core/entities";

export interface GetUserByUsernameRepository {
    getUserByUsername: (username: string) => Promise<User>;
}
