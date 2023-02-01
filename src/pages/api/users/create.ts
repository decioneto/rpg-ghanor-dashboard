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
    const createUser: CreateUser = new CreateUser(userRepository);

    const { username, password } = req.body;

    try {
        const { user } = await createUser.execute({
            username,
            password,
        });

        return {
            data: user,
            status: res
                .status(201)
                .json({ message: 'User created successfully' }),
        };
    } catch (error) {
        return res.status(400).json({
            message: 'Can not create user',
        });
    }
}
