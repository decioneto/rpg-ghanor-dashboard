import { CreateCharacterSheetUseCase } from '@/backend/core/use-cases/create-ch-sheet';
import { NextResponse } from 'next/server';
import { created, serverError } from '../helpers';
import { Controller } from '../protocols';

export type ChSheetRequest = {
    chName: string;
    chLevel: number;
    userId: string;
};

export class CreateCharacterSheetController implements Controller {
    constructor(private createChSheetUseCase: CreateCharacterSheetUseCase) {}

    async handle(request: ChSheetRequest): Promise<NextResponse> {
        try {
            const { chName, chLevel, userId } = request;
            await this.createChSheetUseCase.execute({
                chName,
                chLevel,
                userId,
            });

            return created();
        } catch (error: any) {
            return serverError(error);
        }
    }
}
