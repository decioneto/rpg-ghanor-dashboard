import { FindCharacterSheetsByUserIdService } from '@/backend/data/services/find-character-sheet-by-user-id';
import { PrismaService } from '@/backend/infra/database/prisma/prisma-service';
import { PrismaCharacterSheetRepository } from '@/backend/infra/database/prisma/repositories/prisma-character-sheet-repository';
import { FindCharacterSheetsByUserIdController } from '@/backend/presentation/controllers/find-character-sheet';

type QueryParams = {
    params: {
        userId: string;
    };
};

export async function GET(request: Request, { params }: QueryParams) {
    const prismaService = new PrismaService();
    const prismaCharacterSheetRepository = new PrismaCharacterSheetRepository(
        prismaService
    );
    const findCharacterSheetsByUserIdService =
        new FindCharacterSheetsByUserIdService(prismaCharacterSheetRepository);
    const controller = new FindCharacterSheetsByUserIdController(
        findCharacterSheetsByUserIdService
    );

    return await controller.handle({ userId: params.userId });
}
