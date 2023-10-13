import { User } from '@/backend/core/entities';
import { UserModel } from '@/backend/data/models/user';
import { UserRepository } from '@/backend/data/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
    public users: UserModel[] = [];

    async createUser(user: UserModel): Promise<boolean> {
        const result = this.users.push(user);
        return result === this.users.length;
    }

    async checkByUsername(username: string): Promise<boolean> {
        const exists = this.users.some((item) => item.username === username);
        return exists;
    }

    async findByUsername(username: string): Promise<User> {
        const user = this.users.filter((item) => item.username === username);
        return user[0];
    }
}
