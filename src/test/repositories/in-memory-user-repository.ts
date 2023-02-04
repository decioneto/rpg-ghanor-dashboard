import { User } from '@/app/entities/user';
import { UserRepository } from '@/app/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
    public users: User[] = [];

    async create(user: User): Promise<void> {
        this.users.push(user);
    }

    async findByUsername(username: string): Promise<User | null> {
        const user = this.users.find((user) => user.username === username);

        if (!user) {
            return null;
        }

        return user;
    }

    async deleteUser(userId: string): Promise<void> {
        const userIndex = this.users.findIndex((user) => user.id === userId);

        if (!userIndex) {
            return;
        }

        this.users.splice(userIndex, 1);
    }
}
