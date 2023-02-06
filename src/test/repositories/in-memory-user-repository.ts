import { User } from '@/app/entities/user';
import { UserRepository } from '@/app/repositories/user-repository';

export class InMemoryUserRepository implements UserRepository {
    public users: User[] = [];
    public userRole: { userId: string; roleId: string } = {
        userId: '',
        roleId: '',
    };

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

    async delete(userId: string): Promise<void> {
        const userIndex = this.users.findIndex((user) => user.id === userId);

        if (!userIndex) {
            return;
        }

        this.users.splice(userIndex, 1);
    }

    async findById(userId: string): Promise<User | null> {
        const user = this.users.find((user) => user.id === userId);

        if (!user) {
            return null;
        }

        return user;
    }

    async createUserRole(userId: string, roleId: string): Promise<void> {
        this.userRole.userId = userId;
        this.userRole.roleId = roleId;
    }

    async getUsers(): Promise<User[]> {
        return this.users;
    }
}
