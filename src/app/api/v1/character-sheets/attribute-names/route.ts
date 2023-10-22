import { CreateAttrNameService } from '@/backend/data/services/create-attr-name';
import { PrismaService } from '@/backend/infra/database/prisma/prisma-service';
import { PrismaCharacterSheetRepository } from '@/backend/infra/database/prisma/repositories/prisma-character-sheet-repository';
import { CreateAttrNameController } from '@/backend/presentation/controllers/create-attr-name';
import { unauthorized } from '@/backend/presentation/helpers';

export async function POST(request: Request) {
    const prismaService = new PrismaService();
    const prismaCharacterSheetRepository = new PrismaCharacterSheetRepository(
        prismaService
    );
    const createAttrNameService = new CreateAttrNameService(
        prismaCharacterSheetRepository
    );
    const controller = new CreateAttrNameController(createAttrNameService);
    const token = request.headers.get('authorization');
    if (!token) {
        return unauthorized();
    }
    const body = await request.json();

    return await controller.handle(body);
}
