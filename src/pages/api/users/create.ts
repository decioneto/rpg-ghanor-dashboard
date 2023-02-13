import { CreateUser } from '@/app/use-cases/user/create-user';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaRoleRepository } from '@/infra/database/prisma/repositories/prisma-role-repository';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';
import { CreateUserDTO } from '../../../dtos/create-user-dto';

interface CreatUserRequest extends NextApiRequest {
    body: CreateUserDTO;
}

export default async function createUserController(
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
    const createUser = new CreateUser(userRepository, roleRepository);

    const { username, password, roleName } = req.body;

    try {
        const { user } = await createUser.execute({
            username,
            password,
            roleName,
        });

        return res.status(201).json({
            data: {
                user: {
                    id: user.id,
                    username: user.username,
                    roleId: user.roleId,
                },
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
