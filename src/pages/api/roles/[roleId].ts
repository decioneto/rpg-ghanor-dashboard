import { GetRole } from '@/app/use-cases/role/get-role';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaRoleRepository } from '@/infra/database/prisma/repositories/prisma-role-repository';
import { NextApiRequest, NextApiResponse } from 'next';

interface GetRoleRequest extends NextApiRequest {
    query: {
        roleId: string;
    };
}

export default async function getRoleController(
    req: GetRoleRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
        return res.status(405).json({
            message: 'Method not allowed',
            status: 'failed',
        });
    }

    const prismaService = new PrismaService();
    const roleRepository = new PrismaRoleRepository(prismaService);
    const getRole = new GetRole(roleRepository);
    const { roleId } = req.query;

    try {
        const { role } = await getRole.execute({
            roleId,
        });

        return res.status(200).json({
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
