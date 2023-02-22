import { Prisma } from '@prisma/client';
import { AttributeValue } from '../entities/attribute-value';
import { AttributeName } from '../entities/attributeName';
import { CharacterSheet } from '../entities/characterSheet';

export type CharacterSheetsWithAttributes = Prisma.CharacterSheetsGetPayload<{
    include: {
        chAttributes: {
            select: {
                attrName: {
                    select: {
                        name: true;
                        AttributesValues: {
                            select: {
                                value: true;
                            };
                        };
                    };
                };
            };
        };
    };
}>;

export interface CharacterSheetRepository {
    createCharacterSheet(characterSheet: CharacterSheet): Promise<void>;
    findCharacterSheets(
        userId: string
    ): Promise<CharacterSheetsWithAttributes[] | null>;
    createAttributeName(attributeName: AttributeName): Promise<void>;
    findAttributeByName(name: string): Promise<AttributeName | null>;
    findAttributeById(attributeNameId: string): Promise<AttributeName | null>;
    createAttributeValue(attributeValue: AttributeValue): Promise<void>;
    findAttributeValueById(
        attributeValueId: string
    ): Promise<AttributeValue | null>;
    updateAttributeValue(attributeValue: AttributeValue): Promise<void>;
}
