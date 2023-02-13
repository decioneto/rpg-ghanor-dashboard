import { AttributeName } from '@/app/entities/attributeName';
import { CharacterSheetRepository } from '@/app/repositories/characterSheet-repository';

export class InMemoryCharacterSheetRepository
    implements CharacterSheetRepository
{
    public attributes: AttributeName[] = [];

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
}
