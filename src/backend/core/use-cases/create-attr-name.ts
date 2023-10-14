import { AttributeName } from "../entities/attr-name";

export interface CreateAttributeNameUseCase {
    execute: (attrName: AttributeName) => Promise<void>;
}