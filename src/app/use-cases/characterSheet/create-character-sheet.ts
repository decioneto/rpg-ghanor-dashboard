import { CharacterSheet } from '@/app/entities/characterSheet';
import { CharacterSheetRepository } from '@/app/repositories/characterSheet-repository';
import { UserRepository } from '@/app/repositories/user-repository';

interface CreateCharacterSheetRequest {
    userId: string;
    charName: string;
}

export class CreateCharacterSheet {
    constructor(
        private userRepository: UserRepository,
        private characterSheetRepository: CharacterSheetRepository
    ) {}

    async execute(request: CreateCharacterSheetRequest): Promise<void> {
        const { userId, charName } = request;
        const user = this.userRepository.findById(userId);

        if (!user) {
            throw new Error('User not found');
        }

        const characterSheet = new CharacterSheet({
            userId,
            chName: charName,
        });

        await this.characterSheetRepository.createCharacterSheet(
            characterSheet
        );
    }
}
