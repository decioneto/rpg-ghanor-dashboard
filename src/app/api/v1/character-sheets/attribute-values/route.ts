import { CreateAttrValueService } from '@/backend/data/services/create-attr-value';
import { PrismaService } from '@/backend/infra/database/prisma/prisma-service';
import { PrismaCharacterSheetRepository } from '@/backend/infra/database/prisma/repositories/prisma-character-sheet-repository';
import { CreateAttrValueController } from '@/backend/presentation/controllers/create-attr-value';
import { unauthorized } from '@/backend/presentation/helpers';

export async function POST(request: Request) {
    const prismaService = new PrismaService();
    const prismaCharacterSheetRepository = new PrismaCharacterSheetRepository(
        prismaService
    );
    const createAttrValueService = new CreateAttrValueService(
        prismaCharacterSheetRepository
    );
    const controller = new CreateAttrValueController(createAttrValueService);
    const token = request.headers.get('authorization');
    if (!token) {
        return unauthorized();
    }
    const body = await request.json();

    return await controller.handle(body);
}
