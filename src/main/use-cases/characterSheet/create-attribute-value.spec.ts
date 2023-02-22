import { CreateAttributeName } from './create-attribute-name';
import { CreateAttributeValue } from './create-attribute-value';
import { InMemoryCharacterSheetRepository } from '@/test/repositories/in-memory-characterSheet-repository';
import { makeAttributeName } from '@/test/factories/attribute-name-factory';

describe('Attribute name', () => {
    it('should be able to create a attribute value', async () => {
        const characterSheetRepository = new InMemoryCharacterSheetRepository();
        const createAttributeName = new CreateAttributeName(
            characterSheetRepository
        );
        const createAttributeValue = new CreateAttributeValue(
            characterSheetRepository
        );

        const attributeName = makeAttributeName();

        await createAttributeName.execute(attributeName);

        const attribute = characterSheetRepository.attributes[0];

        await createAttributeValue.execute({
            attributeNameId: attribute.id,
            value: 'barbaro',
        });

        expect(characterSheetRepository.attributeValues).toHaveLength(1);
    });
});
