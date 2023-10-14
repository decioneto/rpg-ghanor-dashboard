import { AttributeNameModel } from "../models/attr-name";

export interface AttrNameRepository {
    create: (attrName: AttributeNameModel) => Promise<void>
}