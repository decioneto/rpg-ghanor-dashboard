import { CreateUserRole } from '@/app/use-cases/create-user-role';
import { RoleNameEnum } from '@/enums/RoleEnum';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaRoleRepository } from '@/infra/database/prisma/repositories/prisma-role-repository';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';

interface CreatUserRoleRequest extends NextApiRequest {
    query: {
        userId: string;
    };
    body: {
        roleName: RoleNameEnum;
    };
}

export default async function createUserRoleController(
    req: CreatUserRoleRequest,
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

    const { userId } = req.query;
    const { roleName } = req.body;

    try {
        await createUserRole.execute({
            userId,
            roleName,
        });

        return res.status(200).json({
            data: {},
            status: 'success',
        });
    } catch (err: Error | any) {
        return res.status(400).json({
            message: err.message,
            status: 'failed',
        });
    }
}
