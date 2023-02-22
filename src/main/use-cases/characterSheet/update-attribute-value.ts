import { CharacterSheetRepository } from '@/main/repositories/characterSheet-repository';

interface UpdateAttributeValueRequest {
    attributeValueId: string;
    newValue: string;
}

export class UpdateAttributeValue {
    constructor(private characterSheetRepository: CharacterSheetRepository) {}

    async execute(request: UpdateAttributeValueRequest): Promise<void> {
        const { attributeValueId, newValue } = request;

        const attributeValue =
            await this.characterSheetRepository.findAttributeValueById(
                attributeValueId
            );

        if (!attributeValue) {
            throw new Error('Attribute Value not found');
        }

        attributeValue.value = newValue;

        await this.characterSheetRepository.updateAttributeValue(
            attributeValue
        );
    }
}
