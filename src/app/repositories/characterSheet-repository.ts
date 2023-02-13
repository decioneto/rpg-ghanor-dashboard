import { AttributeName } from '../entities/attributeName';

export interface CharacterSheetRepository {
    createAttributeName(attributeName: AttributeName): Promise<void>;
}
