import { CreateRoleUseCase } from '@/backend/core/use-cases';
import { RoleModel } from '@/backend/data/models';
import { NextResponse } from 'next/server';
import { created, serverError } from '../helpers';
import { Controller, HttpResponse } from '../protocols';

export type RoleRequest = {
    role: RoleModel;
};

export class CreateRoleController implements Controller {
    constructor(private createRoleUsecase: CreateRoleUseCase) {}

    async handle(request: RoleRequest): Promise<NextResponse> {
        try {
            const { role } = request;
            await this.createRoleUsecase.create(role);

            return created();
        } catch (error: any) {
            return serverError(error);
        }
    }
}
