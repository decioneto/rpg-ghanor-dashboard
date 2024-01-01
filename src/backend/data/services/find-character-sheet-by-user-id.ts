import { CharacterSheet } from '@/backend/core/entities/ch-sheet';
import { FindCharacterSheetsByUserIdUseCase } from '@/backend/core/use-cases/find-character-sheets-by-user';
import { CharacterSheetRepository } from '../repositories/character-sheet-repository';

export class FindCharacterSheetsByUserIdService
    implements FindCharacterSheetsByUserIdUseCase
{
    constructor(private characterSheetRepository: CharacterSheetRepository) {}

    async execute(userId: string): Promise<CharacterSheet[]> {
        return await this.characterSheetRepository.findChSheetsByUserId(userId);
    }
}
