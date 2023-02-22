import { GetUserCharacterSheets } from '@/main/use-cases/characterSheet/get-user-character-sheets';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaCharacterSheetsRepository } from '@/infra/database/prisma/repositories/prisma-characterSheet-repositiory';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';

interface GetUserCharacterSheetsRequest extends NextApiRequest {
    query: {
        userId: string;
    };
}

export default async function getUserCharacterSheetsController(
    req: GetUserCharacterSheetsRequest,
    res: NextApiResponse
) {
    if (req.method !== 'GET') {
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
    const userRepository = new PrismaUserRepository(prismaService);
    const characterSheetRepository = new PrismaCharacterSheetsRepository(
        prismaService
    );
    const getUserCharacterSheets = new GetUserCharacterSheets(
        userRepository,
        characterSheetRepository
    );
    const { userId } = req.query;

    try {
        const { characterSheets } = await getUserCharacterSheets.execute({
            userId,
        });

        res.status(200).json({
            data: characterSheets,
            status: 'success',
        });
    } catch (err: Error | any) {
        return res.status(400).json({
            message: err.message,
            status: 'failed',
        });
    }
}
