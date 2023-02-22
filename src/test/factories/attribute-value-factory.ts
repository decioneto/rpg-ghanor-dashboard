import { AttributeValue } from '@/main/entities/attribute-value';

type Override = Partial<AttributeValue>;

export function makeAttributeValue(override: Override = {}) {
    return new AttributeValue({
        attributeNameId: '',
        value: 'barbaro',
        ...override,
    });
}
