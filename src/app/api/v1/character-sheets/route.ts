import { CreateCharacterSheetService } from '@/backend/data/services/create-ch-sheet';
import { PrismaService } from '@/backend/infra/database/prisma/prisma-service';
import { PrismaCharacterSheetRepository } from '@/backend/infra/database/prisma/repositories/prisma-character-sheet-repository';
import { CreateCharacterSheetController } from '@/backend/presentation/controllers/create-ch-sheet';
import { unauthorized } from '@/backend/presentation/helpers';

export async function POST(request: Request) {
    const prismaService = new PrismaService();
    const prismaCharacterSheetRepository = new PrismaCharacterSheetRepository(
        prismaService
    );
    const createChSheetService = new CreateCharacterSheetService(
        prismaCharacterSheetRepository
    );
    const controller = new CreateCharacterSheetController(createChSheetService);
    const token = request.headers.get('authorization');
    if (!token) {
        return unauthorized();
    }
    const body = await request.json();

    return await controller.handle(body);
}
