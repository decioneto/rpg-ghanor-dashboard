import { AttributeValue } from '@/app/entities/attribute-value';
import { AttributeName } from '@/app/entities/attributeName';
import {
    AttributesName as RawAttributeName,
    AttributesValues as RawAttributesValues,
} from '@prisma/client';

export class PrismaAttributeNameMapper {
    static toDomain(raw: RawAttributeName): AttributeName {
        return new AttributeName({
            id: raw.id,
            createdAt: raw.createdAt,
            name: raw.name,
        });
    }
}

export class PrismaAttributeValueMapper {
    static toDomain(raw: RawAttributesValues): AttributeValue {
        return new AttributeValue({
            id: raw.id,
            createdAt: raw.createdAt,
            attributeNameId: raw.attrNameId,
            value: raw.value,
        });
    }
}
