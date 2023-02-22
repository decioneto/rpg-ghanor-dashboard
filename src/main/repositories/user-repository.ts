import { User } from '../entities/user';

export interface UserRepository {
    create(user: User): Promise<void>;
    getUsers(): Promise<User[]>;
    findById(userId: string): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    delete(userId: string): Promise<void>;
}
