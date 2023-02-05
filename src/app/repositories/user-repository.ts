import { User } from '../entities/user';

export interface UserRepository {
    create(user: User): Promise<void>;
    findUserById(userId: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    deleteUser(userId: string): Promise<void>;
    createUserRole(userId: string, roleId: string): Promise<void>;
}
