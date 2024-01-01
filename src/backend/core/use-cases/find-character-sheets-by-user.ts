import { CharacterSheet } from '../entities/ch-sheet';

export interface FindCharacterSheetsByUserIdUseCase {
    execute: (userId: string) => Promise<CharacterSheet[]>;
}
