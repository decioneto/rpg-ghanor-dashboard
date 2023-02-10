import { User } from '../entities/user';
import { UserRepository } from '../repositories/user-repository';

interface GetSingleUserRequest {
    userId: string;
}

interface GetSingleUserResponse {
    user: User;
}

export class GetSingleUser {
    constructor(private userRepository: UserRepository) {}

    async execute(
        request: GetSingleUserRequest
    ): Promise<GetSingleUserResponse> {
        const { userId } = request;
        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new Error('User does not exists');
        }

        return {
            user,
        };
    }
}
