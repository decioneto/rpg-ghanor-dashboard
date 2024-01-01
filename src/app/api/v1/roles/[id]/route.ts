import { FindRoleByIdService } from '@/backend/data/services/find-role-by-id';
import { PrismaService } from '@/backend/infra/database/prisma/prisma-service';
import { PrismaRoleRepository } from '@/backend/infra/database/prisma/repositories/prisma-role-repository';
import { FindRoleByIdController } from '@/backend/presentation/controllers/find-role-by-id';
import { unauthorized } from '@/backend/presentation/helpers';

type QueryParams = {
    params: {
        id: string;
    };
};

export async function GET(request: Request, { params }: QueryParams) {
    const prismaService = new PrismaService();
    const prismaRoleRepository = new PrismaRoleRepository(prismaService);
    const findRoleByIdService = new FindRoleByIdService(prismaRoleRepository);
    const controller = new FindRoleByIdController(findRoleByIdService);
    const token = request.headers.get('authorization');
    if (!token) {
        return unauthorized();
    }

    return await controller.handle({ roleId: params.id });
}
