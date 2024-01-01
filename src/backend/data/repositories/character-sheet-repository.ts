import { AttributeNameModel } from '../models/attr-name';
import { AttributeValueModel } from '../models/attr-value';
import { CharacterSheetModel } from '../models/ch-sheet';

export interface CharacterSheetRepository {
    createChSheet: (chSheet: CharacterSheetModel) => Promise<boolean>;
    findChSheetsByUserId: (userId: string) => Promise<CharacterSheetModel[]>;
    createAttrName: (attrName: AttributeNameModel) => Promise<boolean>;
    createAttrValue: (attrValue: AttributeValueModel) => Promise<boolean>;
}
