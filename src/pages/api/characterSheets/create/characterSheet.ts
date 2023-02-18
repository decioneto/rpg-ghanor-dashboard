import { CreateCharacterSheet } from '@/app/use-cases/characterSheet/create-character-sheet';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaCharacterSheetsRepository } from '@/infra/database/prisma/repositories/prisma-characterSheet-repositiory';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';

interface CreateCharacterSheetRequest extends NextApiRequest {
    body: {
        userId: string;
        charName: string;
    };
}

export default async function createCharacterSheetController(
    req: CreateCharacterSheetRequest,
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
    const userRepository = new PrismaUserRepository(prismaService);
    const createCharacterSheet = new CreateCharacterSheet(
        userRepository,
        characterSheetRepository
    );
    const { charName, userId } = req.body;

    try {
        await createCharacterSheet.execute({
            userId,
            charName,
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
