import { hash } from 'bcryptjs';
import { User } from '../entities/user';
import { UserRepository } from '../repositories/user-repository';

interface CreateUserRequest {
    username: string;
    password: string;
}

interface CreateUserResponse {
    user: User;
}

export class CreateUser {
    constructor(private userRepository: UserRepository) {}

    async execute(request: CreateUserRequest): Promise<CreateUserResponse> {
        const { username, password } = request;
        const userExist = await this.userRepository.findByUsername(username);

        if (userExist) {
            throw new Error('User already exists');
        }

        const passwordHash = await hash(password, 8);

        const user = new User({
            username,
            password: passwordHash,
        });

        await this.userRepository.create(user);

        return {
            user,
        };
    }
}
