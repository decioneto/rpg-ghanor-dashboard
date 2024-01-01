import { FindCharacterSheetsByUserIdUseCase } from '@/backend/core/use-cases/find-character-sheets-by-user';
import { NextResponse } from 'next/server';
import { ok, serverError } from '../helpers';
import { Controller } from '../protocols';

export type Request = {
    userId: string;
};

export class FindCharacterSheetsByUserIdController implements Controller {
    constructor(
        private findCharacterSheetByUserId: FindCharacterSheetsByUserIdUseCase
    ) {}

    async handle(request: Request): Promise<NextResponse> {
        try {
            const { userId } = request;
            const found = await this.findCharacterSheetByUserId.execute(userId);

            return ok(found);
        } catch (error: any) {
            return serverError(error);
        }
    }
}
