import { CreateUser } from '@/app/use-cases/create-user';
import { DeleteUser } from '@/app/use-cases/delete-user';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';

interface DeleteUserRequest extends NextApiRequest {
    query: {
        userId: string;
    };
}

export default async function CreateNotificationController(
    req: DeleteUserRequest,
    res: NextApiResponse
) {
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
