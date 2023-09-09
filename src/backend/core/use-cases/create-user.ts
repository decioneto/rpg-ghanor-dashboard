import { User } from '../entities';

export interface CreateUserUseCase {
    execute: (user: User) => Promise<boolean>;
}
