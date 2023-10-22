import { CreateAttrValueUseCase } from '@/backend/core/use-cases/create-attr-value';
import { AttributeValueModel } from '../models/attr-value';
import { CharacterSheetRepository } from '../repositories/character-sheet-repository';

export class CreateAttrValueService implements CreateAttrValueUseCase {
    constructor(private characterSheetRepository: CharacterSheetRepository) {}

    async execute(attrValue: AttributeValueModel): Promise<boolean> {
        return await this.characterSheetRepository.createAttrValue(attrValue);
    }
}
