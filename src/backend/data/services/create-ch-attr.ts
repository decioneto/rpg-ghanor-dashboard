import { CreateCharacterAttributeUseCase } from '@/backend/core/use-cases/create-ch-attribute';
import { CharacterAttributeModel } from '../models/ch-attr';
import { CharacterSheetRepository } from '../repositories/character-sheet-repository';

export class CreateCharacterAttributeService
    implements CreateCharacterAttributeUseCase
{
    constructor(private characterSheetRepository: CharacterSheetRepository) {}

    async execute(chAttr: CharacterAttributeModel): Promise<boolean> {
        return this.characterSheetRepository.createChAttr(chAttr);
    }
}
