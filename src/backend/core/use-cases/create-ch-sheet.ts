import { CharacterSheet } from '../entities/ch-sheet';

export interface CreateCharacterSheetUseCase {
    execute: (chSheet: CharacterSheet) => Promise<boolean>;
}
