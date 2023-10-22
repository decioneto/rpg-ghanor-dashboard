import { AttributeName } from '@/backend/core/entities/attr-name';
import { AttributeValueModel } from '@/backend/data/models/attr-value';
import { CharacterSheetRepository } from '@/backend/data/repositories/character-sheet-repository';
import { PrismaService } from '../prisma-service';

export class PrismaCharacterSheetRepository
    implements CharacterSheetRepository
{
    constructor(private prismaService: PrismaService) {}

    async createAttrName(attrName: AttributeName): Promise<boolean> {
        const result = await this.prismaService.attributesName.create({
            data: {
                name: attrName.name,
            },
        });

        return result.id !== null;
    }

    async createAttrValue(attrValue: AttributeValueModel): Promise<boolean> {
        const result = await this.prismaService.attributesValues.create({
            data: {
                value: attrValue.value,
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
