import { CharacterAttribute } from '../entities/ch-attribute';

export interface CreateCharacterAttributeUseCase {
    execute: (chAttr: CharacterAttribute) => Promise<boolean>;
}
