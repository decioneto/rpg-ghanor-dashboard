import { CreateAttrValueUseCase } from '@/backend/core/use-cases/create-attr-value';
import { NextResponse } from 'next/server';
import { created, serverError } from '../helpers';
import { Controller } from '../protocols';

export type AttrValueRequest = {
    value: string;
    chSheetId: string;
    attrNameId: string;
};

export class CreateAttrValueController implements Controller {
    constructor(private createAttrValueUseCase: CreateAttrValueUseCase) {}

    async handle(request: AttrValueRequest): Promise<NextResponse> {
        try {
            const { value, attrNameId, chSheetId } = request;
            await this.createAttrValueUseCase.execute({
                value,
                attrNameId,
                chSheetId,
            });

            return created();
        } catch (error: any) {
            if (error instanceof Error) {
                return serverError(error);
            }
            return serverError(error);
        }
    }
}
