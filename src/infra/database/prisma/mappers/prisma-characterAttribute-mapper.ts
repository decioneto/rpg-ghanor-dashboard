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
    static toPrisma(attributeValue: AttributeValue) {
        return {
            id: attributeValue.id,
            createdAt: attributeValue.createdAt,
            attributeNameId: attributeValue.attributeNameId,
            value: attributeValue.value,
        };
    }

    static toDomain(raw: RawAttributesValues): AttributeValue {
        return new AttributeValue({
            id: raw.id,
            createdAt: raw.createdAt,
            attributeNameId: raw.attrNameId,
            value: raw.value,
        });
    }
}
