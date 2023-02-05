import { CreateUserRole } from '@/app/use-cases/create-user-role';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaRoleRepository } from '@/infra/database/prisma/repositories/prisma-role-repository';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function createUserRole(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Method not allowed',
            status: 'failed',
        });
    }

    const prismaService = new PrismaService();
    const userRepository = new PrismaUserRepository(prismaService);
    const roleRepository = new PrismaRoleRepository(prismaService);
    const createUserRole = new CreateUserRole(userRepository, roleRepository);
}
