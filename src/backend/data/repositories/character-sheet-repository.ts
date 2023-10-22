import { AttributeNameModel } from '../models/attr-name';
import { AttributeValueModel } from '../models/attr-value';
import { CharacterAttributeModel } from '../models/ch-attr';
import { CharacterSheetModel } from '../models/ch-sheet';

export interface CharacterSheetRepository {
    createChSheet: (chSheet: CharacterSheetModel) => Promise<boolean>;
    createAttrName: (attrName: AttributeNameModel) => Promise<boolean>;
    createAttrValue: (attrValue: AttributeValueModel) => Promise<boolean>;
}
