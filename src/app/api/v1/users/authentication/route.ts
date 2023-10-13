import { PrismaService } from "@/backend/infra/database/prisma/prisma-service";
import { LoginController } from "@/backend/presentation/controllers/login";
import { PrismaUserRepository } from '@/backend/infra/database/prisma/repositories/prisma-user-repositoey';
import { AuthenticationService } from "@/backend/data/services/authentication";


export async function POST(request: Request) {
    const prismaService = new PrismaService();
    const prismaUserRepository = new PrismaUserRepository(prismaService);
    const getUserByUsername = new 
    const authenticationService = new AuthenticationService();
    const authController = new LoginController(prismaUserRepository, )
}