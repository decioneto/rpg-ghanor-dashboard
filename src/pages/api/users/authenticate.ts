import { AuthenticateUser } from '@/main/use-cases/user/authenticate-user';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaRoleRepository } from '@/infra/database/prisma/repositories/prisma-role-repository';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';

interface CreatUserRequest extends NextApiRequest {
    body: {
        username: string;
        password: string;
    };
}

export default async function authenticateUserController(
    req: CreatUserRequest,
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
    const authenticateUser = new AuthenticateUser(
        userRepository,
        roleRepository
    );

    const { username, password } = req.body;

    try {
        const { user, role, token } = await authenticateUser.execute({
            username,
            password,
        });

        return res.status(200).json({
            data: {
                token,
                user,
                role,
            },
            status: 'success',
        });
    } catch (err: Error | any) {
        return res.status(400).json({
            message: err.message,
            status: 'failed',
        });
    }
}
