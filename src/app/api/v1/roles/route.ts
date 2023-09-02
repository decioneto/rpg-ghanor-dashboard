import { CreateRoleService } from '@/backend/data/services';
import { PrismaService } from '@/backend/infra/database/prisma/prisma-service';
import { PrismaRoleRepository } from '@/backend/infra/database/prisma/repositories/prisma-role-repository';
import { CreateRoleController } from '@/backend/presentation/controllers';

export async function POST(request: Request) {
    const primaService = new PrismaService();
    const prismaRoleRepository = new PrismaRoleRepository(primaService);
    const createRoleService = new CreateRoleService(prismaRoleRepository);
    const constroller = new CreateRoleController(createRoleService);

    const body = await request.json();

    return await constroller.handle(body);
}
