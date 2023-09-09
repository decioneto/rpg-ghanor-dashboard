import { CreateUserService } from '@/backend/data/services/create-user';
import { BcryptAdapter } from '@/backend/infra/cryptography/bcrypt-adapter';
import { PrismaService } from '@/backend/infra/database/prisma/prisma-service';
import { PrismaUserRepository } from '@/backend/infra/database/prisma/repositories/prisma-user-repositoey';
import { CreateUserController } from '@/backend/presentation/controllers/create-user';

export async function POST(request: Request) {
    const primaService = new PrismaService();
    const prismaUserRepository = new PrismaUserRepository(primaService);
    const bcryptAdapter = new BcryptAdapter();
    const createUserService = new CreateUserService(
        prismaUserRepository,
        bcryptAdapter
    );
    const constroller = new CreateUserController(createUserService);

    const body = await request.json();

    return await constroller.handle(body);
}
