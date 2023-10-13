import { PrismaService } from "@/backend/infra/database/prisma/prisma-service";
import { LoginController } from "@/backend/presentation/controllers/login";
import { PrismaUserRepository } from '@/backend/infra/database/prisma/repositories/prisma-user-repository';
import { AuthenticationService } from "@/backend/data/services/authentication";
import { PrismaAccountRepository } from "@/backend/infra/database/prisma/repositories/prisma-account-repository";
import { BcryptAdapter } from "@/backend/infra/cryptography/bcrypt-adapter";
import { JwtAdapter } from "@/backend/infra/cryptography/jwt-adapter";

export async function POST(request: Request) {
    const prismaService = new PrismaService();
    const prismaUserRepository = new PrismaUserRepository(prismaService);
    const getUserByUsername = new PrismaAccountRepository(prismaService);
    const bcryptAdapter = new BcryptAdapter();
    const jwtAdapter = new JwtAdapter(process.env.JWT_SECRET);
    const authenticationService = new AuthenticationService(getUserByUsername, bcryptAdapter, jwtAdapter);
    const authController = new LoginController(prismaUserRepository, authenticationService);

    const body = await request.json();

    return await authController.handle(body);
}