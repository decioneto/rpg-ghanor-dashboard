import { AttributeValue } from '@/app/entities/attribute-value';
import { AttributeName } from '@/app/entities/attributeName';
import { CharacterSheet } from '@/app/entities/characterSheet';
import { CharacterSheetsWithAttributes } from '@/app/repositories/characterSheet-repository';
import {
    AttributesName as RawAttributeName,
    AttributesValues as RawAttributesValues,
    CharacterSheets as RawCharacterSheets,
    Prisma,
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
export class PrismaCharacterSheetsMapper {
    static toDomain(raw: CharacterSheetsWithAttributes) {
        return {
            characterSheet: new CharacterSheet({
                id: raw.id,
                createdAt: raw.createdAt,
                userId: raw.userId,
                chName: raw.chName,
            }),
            chAttributes: raw.chAttributes.map((chAttribute) => {
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
