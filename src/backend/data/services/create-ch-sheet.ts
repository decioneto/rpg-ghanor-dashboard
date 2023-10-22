import { CharacterSheet } from '@/backend/core/entities/ch-sheet';
import { CreateCharacterSheetUseCase } from '@/backend/core/use-cases/create-ch-sheet';
import { CharacterSheetRepository } from '../repositories/character-sheet-repository';

export class CreateCharacterSheetService
    implements CreateCharacterSheetUseCase
{
    constructor(private characterSheetRepository: CharacterSheetRepository) {}

    async execute(chSheet: CharacterSheet): Promise<boolean> {
        return await this.characterSheetRepository.createChSheet(chSheet);
    }
}
