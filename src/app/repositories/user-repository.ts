import { User } from '../entities/user';

export interface UserRepository {
    create(user: User): Promise<void>;
    findByUsername(username: string): Promise<User | null>;
    deleteUser(userId: string): Promise<void>;
}
