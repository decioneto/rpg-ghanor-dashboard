import { AttributeNameModel } from '../models/attr-name';
import { AttributeValueModel } from '../models/attr-value';

export interface CharacterSheetRepository {
    createAttrName: (attrName: AttributeNameModel) => Promise<boolean>;
    createAttrValue: (attrValue: AttributeValueModel) => Promise<boolean>;
}
