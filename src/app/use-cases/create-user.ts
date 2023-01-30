import { CharacterSheets } from '../entities/characterSheets';
import { Role } from '../entities/role';
import { User } from '../entities/user';

interface CreateUserRequest {
    username: string;
    password: string;
    role: Role;
    characterSheets: CharacterSheets[] | null;
}

export class CreateUser {
    async execute(request: CreateUserRequest): Promise<User> {
        const { username, password, role, characterSheets } = request;

        const user = new User({
            username,
            password,
            role,
            characterSheets,
        });

        return user;
    }
}
