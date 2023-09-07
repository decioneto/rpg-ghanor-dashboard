import { FindRoleByIdService } from '@/backend/data/services/find-role-by-id';
import { PrismaService } from '@/backend/infra/database/prisma/prisma-service';
import { PrismaRoleRepository } from '@/backend/infra/database/prisma/repositories/prisma-role-repository';
import { FindRoleByIdController } from '@/backend/presentation/controllers/find-role-by-id';
import { NextResponse } from 'next/server';

type QueryParams = {
    params: {
        id: string;
    };
};

export async function GET(request: Request, { params }: QueryParams) {
    const prismaService = new PrismaService();
    const prismaRoleRepository = new PrismaRoleRepository(prismaService);
    const findRoleByIdService = new FindRoleByIdService(prismaRoleRepository);
    const controller = new FindRoleByIdController(findRoleByIdService);

    console.log(params.id);

    return await controller.handle({ roleId: params.id });
}
