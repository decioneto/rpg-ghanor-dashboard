import { CharacterSheet } from '@/main/entities/characterSheet';
import { makeUser } from '@/test/factories/user-factory';
import { InMemoryCharacterSheetRepository } from '@/test/repositories/in-memory-characterSheet-repository';
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { GetUserCharacterSheets } from './get-user-character-sheets';

describe('Get Character Sheet', () => {
    it('should be able to get all character sheet from an user', async () => {
        const userRepository = new InMemoryUserRepository();
        const characterSheetRepository = new InMemoryCharacterSheetRepository();
        const getUserCharacterSheets = new GetUserCharacterSheets(
            userRepository,
            characterSheetRepository
        );

        const user = await makeUser();

        await userRepository.create(user);

        await characterSheetRepository.createCharacterSheet(
            new CharacterSheet({
                userId: user.id,
                chName: 'Rufus',
            })
        );

        const { characterSheets } = await getUserCharacterSheets.execute({
            userId: user.id,
        });

        expect(characterSheets).toBeTruthy;
    });
});
