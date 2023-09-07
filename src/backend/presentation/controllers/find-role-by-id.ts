import { FindRoleByIdUseCase } from '@/backend/core/use-cases/find-role-by-id';
import { NextResponse } from 'next/server';
import { Controller } from '../protocols';
import { ok, serverError } from '../helpers';

export type Request = {
    roleId: string;
};

export class FindRoleByIdController implements Controller {
    constructor(private findRoleById: FindRoleByIdUseCase) {}

    async handle(request: Request): Promise<NextResponse> {
        try {
            const { roleId } = request;
            const found = await this.findRoleById.findById(roleId);

            return ok(found);
        } catch (error: any) {
            return serverError(error);
        }
    }
}
