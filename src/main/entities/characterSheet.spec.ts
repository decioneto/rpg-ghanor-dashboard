import { CharacterSheet } from './characterSheet';

describe('CharacterSheet', () => {
    it('should be able to create a character sheet', () => {
        const characterSheet = new CharacterSheet({
            userId: 'qweqwe',
            chName: 'Olaf',
        });

        expect(characterSheet).toBeInstanceOf(CharacterSheet);
    });
});
