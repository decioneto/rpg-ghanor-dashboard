import { AttributeName } from '@/backend/core/entities/attr-name';
import { CharacterSheet } from '@/backend/core/entities/ch-sheet';
import { AttributeValueModel } from '@/backend/data/models/attr-value';
import { CharacterSheetRepository } from '@/backend/data/repositories/character-sheet-repository';
import { PrismaService } from '../prisma-service';

export class PrismaCharacterSheetRepository
    implements CharacterSheetRepository
{
    constructor(private prismaService: PrismaService) {}

    async createChSheet(chSheet: CharacterSheet): Promise<boolean> {
        const result = await this.prismaService.characterSheet.create({
            data: {
                chName: chSheet.chName,
                chLevel: chSheet.chLevel,
                user: {
                    connect: {
                        id: chSheet.userId,
                    },
                },
            },
        });

        return result.id !== null;
    }

    async getCharacterSheetsByUser(userId: string) {
        const characterSheets =
            await this.prismaService.characterSheet.findMany({
                where: {
                    userId,
                    chAttributes: {
                        some: {
                            CharacterAttributeNames: {
                                some: {
                                    chAttr: {
                                        chSheets: {
                                            userId,
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            });
    }

    async createAttrName(attrName: AttributeName): Promise<boolean> {
        const result = await this.prismaService.attributeName.create({
            data: {
                name: attrName.name,
            },
        });

        return result.id !== null;
    }

    async createAttrValue(attrValue: AttributeValueModel): Promise<boolean> {
        const result = await this.prismaService.attributeValue.create({
            data: {
                value: attrValue.value,
                chSheet: {
                    connect: {
                        id: attrValue.chSheetId,
                    },
                },
                attrName: {
                    connect: {
                        id: attrValue.attrNameId,
                    },
                },
            },
        });

        return result.id !== null;
    }
}
