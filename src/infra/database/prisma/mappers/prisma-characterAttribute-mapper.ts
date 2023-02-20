import { AttributeValue } from '@/app/entities/attribute-value';
import { AttributeName } from '@/app/entities/attributeName';
import { CharacterSheet } from '@/app/entities/characterSheet';
import {
    AttributesName as RawAttributeName,
    AttributesValues as RawAttributesValues,
    CharacterSheets as RawCharacterSheets,
} from '@prisma/client';

interface CharacterSheetQuery {
    characterSheet: RawCharacterSheets & {
        chAttributes: {
            attrName: {
                name: string;
                AttributesValues: {
                    value: string;
                }[];
            };
        }[];
    };
}
export interface CharacterSheetsMapperResponse {
    characterSheet: CharacterSheet;
    chAttributes: {
        attrName: {
            name: string;
            AttributesValues: {
                value: string;
            }[];
        };
    }[];
}

export class PrismaCharacterSheetsMapper {
    static toDomain(raw: CharacterSheetQuery): CharacterSheetsMapperResponse {
        return {
            characterSheet: new CharacterSheet({
                id: raw.characterSheet.id,
                createdAt: raw.characterSheet.createdAt,
                userId: raw.characterSheet.userId,
                chName: raw.characterSheet.chName,
            }),
            chAttributes: raw.characterSheet.chAttributes.map((chAttribute) => {
                return {
                    attrName: {
                        name: chAttribute.attrName.name,
                        AttributesValues:
                            chAttribute.attrName.AttributesValues.map(
                                (attrValue) => {
                                    return {
                                        value: attrValue.value,
                                    };
                                }
                            ),
                    },
                };
            }),
        };
    }
}

export class PrismaAttributeNameMapper {
    static toDomain(raw: RawAttributeName): AttributeName {
        return new AttributeName({
            id: raw.id,
            createdAt: raw.createdAt,
            name: raw.name,
        });
    }
}

export class PrismaAttributeValueMapper {
    static toPrisma(attributeValue: AttributeValue) {
        return {
            id: attributeValue.id,
            createdAt: attributeValue.createdAt,
            attributeNameId: attributeValue.attributeNameId,
            value: attributeValue.value,
        };
    }

    static toDomain(raw: RawAttributesValues): AttributeValue {
        return new AttributeValue({
            id: raw.id,
            createdAt: raw.createdAt,
            attributeNameId: raw.attrNameId,
            value: raw.value,
        });
    }
}
