import { AttributeValue } from '@/app/entities/attribute-value';
import { AttributeName } from '@/app/entities/attributeName';
import { CharacterSheetRepository } from '@/app/repositories/characterSheet-repository';

export class InMemoryCharacterSheetRepository
    implements CharacterSheetRepository
{
    public attributes: AttributeName[] = [];
    public attributeValues: AttributeValue[] = [];

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
}
