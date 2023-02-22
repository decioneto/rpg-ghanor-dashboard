import { CreateAttributeName } from './create-attribute-name';
import { InMemoryCharacterSheetRepository } from '@/test/repositories/in-memory-characterSheet-repository';
import { makeAttributeName } from '@/test/factories/attribute-name-factory';

describe('Attribute name', () => {
    it('should be able to create a attribute name', async () => {
        const characterSheetRepository = new InMemoryCharacterSheetRepository();
        const createAttributeName = new CreateAttributeName(
            characterSheetRepository
        );

        const attributeName = makeAttributeName();

        await createAttributeName.execute(attributeName);

        expect(characterSheetRepository.attributes).toHaveLength(1);
    });

    it('should not be able to create a attribute name that already exists', async () => {
        const characterSheetRepository = new InMemoryCharacterSheetRepository();
        const createAttributeName = new CreateAttributeName(
            characterSheetRepository
        );

        const attributeName1 = makeAttributeName();

        await createAttributeName.execute(attributeName1);

        expect(async () => {
            await createAttributeName.execute({
                name: 'class',
            });
        }).toThrowError;
    });
});
