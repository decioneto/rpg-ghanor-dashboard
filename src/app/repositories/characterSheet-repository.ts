import { AttributeValue } from '../entities/attribute-value';
import { AttributeName } from '../entities/attributeName';

export interface CharacterSheetRepository {
    createAttributeName(attributeName: AttributeName): Promise<void>;
    findAttributeByName(name: string): Promise<AttributeName | null>;
    findAttributeById(id: string): Promise<AttributeName | null>;
    createAttributeValue(attributeValue: AttributeValue): Promise<void>;
}
