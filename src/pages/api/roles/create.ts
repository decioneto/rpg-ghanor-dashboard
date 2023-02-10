import { CreateRole } from '@/app/use-cases/create-role';
import { CreateRoleDTO } from '@/dtos/create-role-dto';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaRoleRepository } from '@/infra/database/prisma/repositories/prisma-role-repository';
import { NextApiRequest, NextApiResponse } from 'next';

interface CreateRoleRequest extends NextApiRequest {
    body: CreateRoleDTO;
}

export default async function createRoleController(
    req: CreateRoleRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Method not allowed',
            status: 'failed',
        });
    }

    const prismaService = new PrismaService();
    const roleRepository = new PrismaRoleRepository(prismaService);
    const createRole = new CreateRole(roleRepository);
    const { roleName, userId } = req.body;

    try {
        const { role } = await createRole.execute({
            roleName,
        });

        return res.status(201).json({
            data: {
                role: {
                    id: role.id,
                    createdAt: role.createdAt,
                    roleLevel: role.roleLevel,
                    roleName: role.roleName,
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
