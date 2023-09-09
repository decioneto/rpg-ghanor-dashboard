import { UserModel } from '../models/user';

export interface UserRepository {
    createUser: (user: UserModel) => Promise<boolean>;
    checkByUsername: (username: string) => Promise<boolean>;
}
