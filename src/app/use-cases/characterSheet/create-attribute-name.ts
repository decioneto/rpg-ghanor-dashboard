import { AttributeName } from '../../entities/attributeName';
import { CharacterSheetRepository } from '../../repositories/characterSheet-repository';

interface CreateAttributeNameRequest {
    name: string;
}

export class CreateAttributeName {
    constructor(private characterSheetRepository: CharacterSheetRepository) {}

    async execute(request: CreateAttributeNameRequest): Promise<void> {
        const { name } = request;
        const attributeNameExists =
            await this.characterSheetRepository.findAttributeByName(name);

        if (attributeNameExists) {
            throw new Error('Attribute name already exists');
        }

        const attributeName = new AttributeName({
            name,
        });

        await this.characterSheetRepository.createAttributeName(attributeName);
    }
}
