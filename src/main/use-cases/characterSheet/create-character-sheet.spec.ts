import { makeUser } from '@/test/factories/user-factory';
import { InMemoryCharacterSheetRepository } from '@/test/repositories/in-memory-characterSheet-repository';
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { CreateCharacterSheet } from './create-character-sheet';

describe('Character Sheet', () => {
    it('should be able to create a character sheet', async () => {
        const characterSheetRepository = new InMemoryCharacterSheetRepository();
        const userRepository = new InMemoryUserRepository();
        const createCharacterSheet = new CreateCharacterSheet(
            userRepository,
            characterSheetRepository
        );

        const user = await makeUser();

        createCharacterSheet.execute({
            userId: user.id,
            charName: 'Rufus Ghanor',
        });

        expect(characterSheetRepository.characterSheets).toHaveLength(1);
    });

    it('should not be able to create a character sheet for a non existing user', async () => {
        const characterSheetRepository = new InMemoryCharacterSheetRepository();
        const userRepository = new InMemoryUserRepository();
        const createCharacterSheet = new CreateCharacterSheet(
            userRepository,
            characterSheetRepository
        );

        expect(() => {
            createCharacterSheet.execute({
                userId: 'fake-user-id',
                charName: 'Rufus Ghanor',
            });
        }).toThrowError;
    });
});
