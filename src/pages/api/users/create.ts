import { CreateUser } from '@/app/use-cases/create-user';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';
import { CreateUserDTO } from '../../../dtos/create-user-dto';

interface CreatUserRequest extends NextApiRequest {
    body: CreateUserDTO;
}

export default async function CreateNotificationController(
    req: CreatUserRequest,
    res: NextApiResponse
) {
    const prismaService = new PrismaService();
    const userRepository = new PrismaUserRepository(prismaService);
    const createUser = new CreateUser(userRepository);

    const { username, password } = req.body;

    try {
        const { user } = await createUser.execute({
            username,
            password,
        });

        return res.status(201).json({
            data: {
                user: {
                    id: user.id,
                    username: user.username,
                },
            },
            status: 'success',
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Can not create a user',
            status: 'failed',
        });
    }
}
