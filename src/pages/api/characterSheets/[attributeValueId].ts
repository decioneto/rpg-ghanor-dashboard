import { UpdateAttributeValue } from '@/app/use-cases/characterSheet/update-attribute-value';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaCharacterSheetsRepository } from '@/infra/database/prisma/repositories/prisma-characterSheet-repositiory';
import { NextApiRequest, NextApiResponse } from 'next';

interface UpdateAttributeValueRequest extends NextApiRequest {
    query: {
        attributeValueId: string;
    };
    body: {
        newValue: string;
    };
}

export default async function attributeValueController(
    req: UpdateAttributeValueRequest,
    res: NextApiResponse
) {
    if (req.method === 'PUT') {
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
        const updateAttributeValue = new UpdateAttributeValue(
            characterSheetRepository
        );

        const { attributeValueId } = req.query;
        const { newValue } = req.body;

        try {
            await updateAttributeValue.execute({
                attributeValueId,
                newValue,
            });

            res.status(200).json({
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
}
