import { UserRepository } from '../repositories/user-repository';

interface DeleteUserRequest {
    userId: string;
}

export class DeleteUser {
    constructor(private userRepository: UserRepository) {}

    async execute(request: DeleteUserRequest) {
        const { userId } = request;

        if (!userId) {
            throw new Error('User do not exists');
        }

        await this.userRepository.deleteUser(userId);
    }
}
