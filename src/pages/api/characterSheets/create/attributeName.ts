import { CreateAttributeName } from '@/app/use-cases/characterSheet/create-attribute-name';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaCharacterSheetsRepository } from '@/infra/database/prisma/repositories/prisma-characterSheet-repositiory';
import { NextApiRequest, NextApiResponse } from 'next';

interface CreateAttributeNameRequest extends NextApiRequest {
    body: {
        name: string;
    };
}

export default async function CreateAttributeNameController(
    req: CreateAttributeNameRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Method not allowed',
            status: 'failed',
        });
    }

    const prismaService = new PrismaService();
    const characterSheetRepository = new PrismaCharacterSheetsRepository(
        prismaService
    );
    const createAttributeName = new CreateAttributeName(
        characterSheetRepository
    );

    const { name } = req.body;

    try {
        await createAttributeName.execute({ name });

        res.status(201).json({
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
