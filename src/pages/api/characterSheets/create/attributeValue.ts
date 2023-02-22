import { CreateAttributeValue } from '@/main/use-cases/characterSheet/create-attribute-value';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaCharacterSheetsRepository } from '@/infra/database/prisma/repositories/prisma-characterSheet-repositiory';
import { NextApiRequest, NextApiResponse } from 'next';

interface CreateAttributeValueRequest extends NextApiRequest {
    body: {
        attributeNameId: string;
        value: string;
    };
}

export default async function createAttributeValueController(
    req: CreateAttributeValueRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({
            message: 'Method not allowed',
            status: 'failed',
        });
    }

    if (!req.headers.authorization) {
        return res.status(403).json({
            message: 'Not authored',
            status: 'failed',
        });
    }

    const prismaService = new PrismaService();
    const characterSheetRepository = new PrismaCharacterSheetsRepository(
        prismaService
    );
    const createAttributeValue = new CreateAttributeValue(
        characterSheetRepository
    );
    const { attributeNameId, value } = req.body;

    try {
        await createAttributeValue.execute({
            attributeNameId,
            value,
        });

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
