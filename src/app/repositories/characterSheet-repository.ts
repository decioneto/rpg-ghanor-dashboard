import { CharacterSheetsMapperResponse } from '@/infra/database/prisma/mappers/prisma-characterAttribute-mapper';
import { AttributeValue } from '../entities/attribute-value';
import { AttributeName } from '../entities/attributeName';
import { CharacterSheet } from '../entities/characterSheet';

export interface CharacterSheetRepository {
    createCharacterSheet(characterSheet: CharacterSheet): Promise<void>;
    findCharacterSheets(
        userId: string
    ): Promise<CharacterSheetsMapperResponse[] | null>;
    createAttributeName(attributeName: AttributeName): Promise<void>;
    findAttributeByName(name: string): Promise<AttributeName | null>;
    findAttributeById(attributeNameId: string): Promise<AttributeName | null>;
    createAttributeValue(attributeValue: AttributeValue): Promise<void>;
    findAttributeValueById(
        attributeValueId: string
    ): Promise<AttributeValue | null>;
    updateAttributeValue(attributeValue: AttributeValue): Promise<void>;
}
