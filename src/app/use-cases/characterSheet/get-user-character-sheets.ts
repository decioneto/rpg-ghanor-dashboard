import { CharacterSheet } from '@/app/entities/characterSheet';
import { CharacterSheetRepository } from '@/app/repositories/characterSheet-repository';
import { UserRepository } from '@/app/repositories/user-repository';

interface GetUserCharacterSheetsRequest {
    userId: string;
}

interface GetUserCharacterSheetsResponse {
    characterSheets: CharacterSheet[];
}

export class GetUserCharacterSheets {
    constructor(
        private userRepository: UserRepository,
        private characterSheetRepository: CharacterSheetRepository
    ) {}

    async execute(
        request: GetUserCharacterSheetsRequest
    ): Promise<GetUserCharacterSheetsResponse> {
        const { userId } = request;

        const user = await this.userRepository.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        const characterSheets =
            await this.characterSheetRepository.findCharacterSheets(user.id);

        if (!characterSheets) {
            throw new Error('Character Sheet not found');
        }

        return {
            characterSheets,
        };
    }
}
