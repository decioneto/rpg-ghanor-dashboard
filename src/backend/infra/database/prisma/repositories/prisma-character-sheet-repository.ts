import { AttributeName } from "@/backend/core/entities/attr-name";
import { CharacterSheetRepository } from "@/backend/data/repositories/character-sheet-repository";
import { PrismaService } from "../prisma-service";

export class PrismaCharacterSheetRepository implements CharacterSheetRepository {
    constructor(private prismaService: PrismaService) {}

    async createAttrName(attrName: AttributeName): Promise<boolean> {
        const result = await this.prismaService.attributesName.create({
            data: {
                name: attrName.name
            }
        })

        return result.id !== null;
    };
}