import { AttributeName } from '@/app/entities/attributeName';
import { AttributesName as RawAttributeName } from '@prisma/client';

export class PrismaAttributeNameMapper {
    static toDomain(raw: RawAttributeName): AttributeName {
        return new AttributeName({
            id: raw.id,
            createdAt: raw.createdAt,
            name: raw.name,
        });
    }
}
