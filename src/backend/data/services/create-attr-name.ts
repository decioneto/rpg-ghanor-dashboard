import { CreateAttributeNameUseCase } from "@/backend/core/use-cases/create-attr-name";
import { AttributeNameModel } from "../models/attr-name";
import { CharacterSheetRepository } from "../repositories/character-sheet-repository";

export class CreateAttrNameService implements CreateAttributeNameUseCase {
    constructor(private characterSheetRepository: CharacterSheetRepository) {}

    async execute(attrName: AttributeNameModel): Promise<boolean> {
        return await this.characterSheetRepository.createAttrName(attrName);
    };
}