import { AttributeName } from '@/app/entities/attributeName';
import { CharacterSheetRepository } from '@/app/repositories/characterSheet-repository';
import { PrismaAttributeNameMapper } from '../mappers/prisma-characterAttribute-mapper';
import { PrismaService } from '../prisma-service';

export class PrismaCharacterSheetsRepository
    implements CharacterSheetRepository
{
    constructor(private prismaService: PrismaService) {}

    async createAttributeName(attributeName: AttributeName): Promise<void> {
        await this.prismaService.attributesName.create({
            data: {
                id: attributeName.id,
                createdAt: attributeName.createdAt,
                name: attributeName.name,
            },
        });
    }

    async findAttributeByName(name: string): Promise<AttributeName | null> {
        const attributeName = await this.prismaService.attributesName.findFirst(
            {
                where: {
                    name: name,
                },
            }
        );

        if (!attributeName) return null;

        return PrismaAttributeNameMapper.toDomain(attributeName);
    }
}
