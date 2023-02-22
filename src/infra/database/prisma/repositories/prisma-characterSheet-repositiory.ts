import { AttributeValue } from '@/app/entities/attribute-value';
import { AttributeName } from '@/app/entities/attributeName';
import { CharacterSheet } from '@/app/entities/characterSheet';
import {
    CharacterSheetRepository,
    CharacterSheetsWithAttributes,
} from '@/app/repositories/characterSheet-repository';
import { randomUUID } from 'crypto';
import {
    PrismaAttributeNameMapper,
    PrismaAttributeValueMapper,
    PrismaCharacterSheetsMapper,
} from '../mappers/prisma-characterAttribute-mapper';
import { PrismaService } from '../prisma-service';

export class PrismaCharacterSheetsRepository
    implements CharacterSheetRepository
{
    constructor(private prismaService: PrismaService) {}

    async createCharacterSheet(characterSheet: CharacterSheet): Promise<void> {
        const attributeNames =
            await this.prismaService.attributesName.findMany();

        await this.prismaService.characterSheets.create({
            data: {
                id: characterSheet.id,
                createdAt: characterSheet.createdAt,
                chName: characterSheet.chName,
                user: {
                    connect: {
                        id: characterSheet.userId,
                    },
                },
                chAttributes: {
                    create: attributeNames.map((item) => {
                        return {
                            id: randomUUID(),
                            attrName: {
                                connect: {
                                    id: item.id,
                                },
                            },
                        };
                    }),
                },
            },
        });
    }

    async findCharacterSheets(
        userId: string
    ): Promise<CharacterSheetsWithAttributes[] | null> {
        const characterSheets =
            await this.prismaService.characterSheets.findMany({
                where: {
                    userId: userId,
                },
                include: {
                    chAttributes: {
                        select: {
                            attrName: {
                                select: {
                                    name: true,
                                    AttributesValues: {
                                        select: {
                                            value: true,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });

        if (!characterSheets) return null;

        return characterSheets;
    }

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

    async findAttributeById(
        attributeNameId: string
    ): Promise<AttributeName | null> {
        const attribute = await this.prismaService.attributesName.findUnique({
            where: {
                id: attributeNameId,
            },
        });

        if (!attribute) return null;

        return PrismaAttributeNameMapper.toDomain(attribute);
    }

    async createAttributeValue(attributeValue: AttributeValue): Promise<void> {
        await this.prismaService.attributesValues.create({
            data: {
                id: attributeValue.id,
                createdAt: attributeValue.createdAt,
                value: attributeValue.value,
                attrName: {
                    connect: {
                        id: attributeValue.attributeNameId,
                    },
                },
            },
        });
    }

    async findAttributeValueById(
        attributeValueId: string
    ): Promise<AttributeValue | null> {
        const attributeValue =
            await this.prismaService.attributesValues.findUnique({
                where: {
                    id: attributeValueId,
                },
            });

        if (!attributeValue) return null;

        return PrismaAttributeValueMapper.toDomain(attributeValue);
    }

    async updateAttributeValue(attributeValue: AttributeValue): Promise<void> {
        const raw = PrismaAttributeValueMapper.toPrisma(attributeValue);

        await this.prismaService.attributesValues.update({
            where: {
                id: raw.id,
            },
            data: {
                id: raw.id,
                createdAt: raw.createdAt,
                value: raw.value,
                attrName: {
                    connect: {
                        id: raw.attributeNameId,
                    },
                },
            },
        });
    }
}
