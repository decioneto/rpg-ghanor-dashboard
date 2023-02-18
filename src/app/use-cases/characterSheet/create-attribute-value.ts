import { AttributeValue } from '@/app/entities/attribute-value';
import { CharacterSheetRepository } from '@/app/repositories/characterSheet-repository';

interface CreateAttributeValueRequest {
    attributeNameId: string;
    value: string;
}

export class CreateAttributeValue {
    constructor(private characterSheetRepository: CharacterSheetRepository) {}

    async execute(request: CreateAttributeValueRequest): Promise<void> {
        const { attributeNameId, value } = request;

        const attributeName =
            await this.characterSheetRepository.findAttributeById(
                attributeNameId
            );

        if (!attributeName) {
            throw new Error('Attribute name not found');
        }

        const attributeValue = new AttributeValue({
            attributeNameId: attributeName.id,
            value,
        });

        await this.characterSheetRepository.createAttributeValue(
            attributeValue
        );
    }
}
