import { AttributeValue } from '@/app/entities/attribute-value';
import { AttributeName } from '@/app/entities/attributeName';
import { CharacterSheet } from '@/app/entities/characterSheet';
import {
    CharacterSheetRepository,
    CharacterSheetsWithAttributes,
} from '@/app/repositories/characterSheet-repository';

export class InMemoryCharacterSheetRepository
    implements CharacterSheetRepository
{
    public characterSheets: CharacterSheet[] = [];
    public attributes: AttributeName[] = [];
    public attributeValues: AttributeValue[] = [];

    async createCharacterSheet(characterSheet: CharacterSheet): Promise<void> {
        this.characterSheets.push(characterSheet);
    }

    async findCharacterSheets(
        userId: string
    ): Promise<CharacterSheetsWithAttributes[] | null> {
        const characterSheets = this.characterSheets.filter(
            (characterSheet) => {
                return characterSheet.userId === userId;
            }
        );

        if (!characterSheets.length) return null;

        const attributeWithValues = this.attributes.map((attribute) => {
            return {
                chAttributes: {
                    attrName: {
                        name: attribute.name,
                        AttributesValues: {
                            value: this.attributeValues[0],
                        },
                    },
                },
            };
        });

        return characterSheets[0], attributeWithValues;
    }

    async createAttributeName(attributeName: AttributeName): Promise<void> {
        this.attributes.push(attributeName);
    }

    async findAttributeByName(name: string): Promise<AttributeName | null> {
        const attributeName = this.attributes.find((attribute) => {
            attribute.name === name;
        });

        if (!attributeName) return null;

        return attributeName;
    }

    async findAttributeById(
        attributeNameId: string
    ): Promise<AttributeName | null> {
        const attribute = this.attributes.find((attribute) => {
            return attribute.id === attributeNameId;
        });

        if (!attribute) return null;

        return attribute;
    }

    async createAttributeValue(attributeValue: AttributeValue): Promise<void> {
        this.attributeValues.push(attributeValue);
    }

    async findAttributeValueById(
        attributeValueId: string
    ): Promise<AttributeValue | null> {
        const attributeValue = this.attributeValues.find((attributeValue) => {
            return attributeValue.id === attributeValueId;
        });

        if (!attributeValue) return null;

        return attributeValue;
    }

    async updateAttributeValue(attributeValue: AttributeValue): Promise<void> {
        const attributeValueIndex = this.attributeValues.findIndex((item) => {
            item.id === attributeValue.id;
        });

        if (attributeValueIndex >= 0) {
            this.attributeValues[attributeValueIndex] = attributeValue;
        }
    }
}
