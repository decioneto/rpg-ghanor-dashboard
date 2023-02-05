import { DeleteUser } from '@/app/use-cases/delete-user';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';

interface DeleteUserRequest extends NextApiRequest {
    query: {
        userId: string;
    };
}

export default async function deleteUserController(
    req: DeleteUserRequest,
    res: NextApiResponse
) {
    if (req.method !== 'DELETE') {
        return res.status(405).json({
            message: 'Method not allowed',
            status: 'failed',
        });
    }

    const prismaService = new PrismaService();
    const userRepository = new PrismaUserRepository(prismaService);
    const deleteUser = new DeleteUser(userRepository);
    const { userId } = req.query;

    try {
        await deleteUser.execute({
            userId,
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
