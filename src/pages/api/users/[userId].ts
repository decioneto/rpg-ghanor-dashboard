import { GetSingleUser } from '@/app/use-cases/user/get-single-user';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';

interface GetSingleUserRequest extends NextApiRequest {
    query: {
        userId: string;
    };
}

export default async function getSingleUserController(
    req: GetSingleUserRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({
            message: 'Method not allowed',
            status: 'failed',
        });
    }

    const prismaService = new PrismaService();
    const userRepository = new PrismaUserRepository(prismaService);
    const getSingleUser = new GetSingleUser(userRepository);
    const { userId } = req.query;

    try {
        const { user } = await getSingleUser.execute({ userId });

        return res.status(200).json({
            data: {
                user: {
                    id: user.id,
                    createdAt: user.createdAt,
                    username: user.username,
                    roleId: user.roleId,
                },
            },
        });
    } catch (err: Error | any) {
        return res.status(400).json({
            message: err.message,
            status: 'failed',
        });
    }
}
