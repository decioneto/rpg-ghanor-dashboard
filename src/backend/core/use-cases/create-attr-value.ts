import { AttributeValue } from '../entities/attr-value';

export interface CreateAttrValueUseCase {
    execute: (attrValue: AttributeValue) => Promise<boolean>;
}
