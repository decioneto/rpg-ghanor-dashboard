import { User } from '../entities/user';
import { UserRepository } from '../repositories/user-repository';

interface FindUserByUsernameRequest {
    username: string;
}

interface FindUserByUsernameResponse {
    user: User;
}

export class FindUserByUsername {
    constructor(private userRepository: UserRepository) {}

    async execute(
        request: FindUserByUsernameRequest
    ): Promise<FindUserByUsernameResponse> {
        const { username } = request;

        const user = await this.userRepository.findByUsername(username);

        if (!user) {
            throw new Error('User do not exists');
        }

        return {
            user,
        };
    }
}
