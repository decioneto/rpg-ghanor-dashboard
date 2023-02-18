import { makeAttributeName } from '@/test/factories/attribute-name-factory';
import { makeAttributeValue } from '@/test/factories/attribute-value-factory';
import { InMemoryCharacterSheetRepository } from '@/test/repositories/in-memory-characterSheet-repository';
import { UpdateAttributeValue } from './update-attribute-value';

describe('Update Attribute Value', () => {
    it('should be able to update a value', async () => {
        const characterSheetRepository = new InMemoryCharacterSheetRepository();
        const updateAttributeValue = new UpdateAttributeValue(
            characterSheetRepository
        );

        const attributeName = makeAttributeName();

        await characterSheetRepository.createAttributeName(attributeName);

        const attributeValue = makeAttributeValue({
            attributeNameId: attributeName.id,
        });

        await characterSheetRepository.createAttributeValue(attributeValue);

        const newValue = 'clerigo';

        await updateAttributeValue.execute({
            attributeValueId: attributeValue.id,
            newValue,
        });

        expect(characterSheetRepository.attributeValues[0].value).toEqual(
            newValue
        );
    });

    it('should not be able to update a non existing attribute value', () => {
        const characterSheetRepository = new InMemoryCharacterSheetRepository();
        const updateAttributeValue = new UpdateAttributeValue(
            characterSheetRepository
        );

        const newValue = 'clerigo';

        expect(async () => {
            await updateAttributeValue.execute({
                attributeValueId: 'fake-attrbuteValue-id',
                newValue,
            });
        }).toThrowError;
    });
});
