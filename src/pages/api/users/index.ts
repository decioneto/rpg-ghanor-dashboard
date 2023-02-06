import { GetUsers } from '@/app/use-cases/get-users';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function getUsersController(
    req: NextApiRequest,
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
    const getUsers = new GetUsers(userRepository);

    try {
        const { users } = await getUsers.execute();

        return res.status(200).json({
            data: {
                users,
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
