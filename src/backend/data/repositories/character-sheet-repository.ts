import { AttributeNameModel } from "../models/attr-name";

export interface CharacterSheetRepository {
    createAttrName: (attrName: AttributeNameModel) => Promise<boolean>
}