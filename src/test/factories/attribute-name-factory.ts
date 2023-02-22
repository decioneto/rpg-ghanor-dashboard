import { AttributeName } from '@/main/entities/attributeName';

type Override = Partial<AttributeName>;

export function makeAttributeName(override: Override = {}) {
    return new AttributeName({
        name: 'class',
    });
}
