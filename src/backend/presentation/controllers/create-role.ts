import { CreateRoleUseCase } from '@/backend/core/use-cases';
import { RoleModel, RoleNameEnumModel } from '@/backend/data/models';
import { NextResponse } from 'next/server';
import { created, serverError } from '../helpers';
import { Controller, HttpResponse } from '../protocols';

export type RoleRequest = {
    roleName: RoleNameEnumModel;
};

export class CreateRoleController implements Controller {
    constructor(private createRoleUsecase: CreateRoleUseCase) {}

    async handle(request: RoleRequest): Promise<NextResponse> {
        try {
            const { roleName } = request;
            await this.createRoleUsecase.create(roleName);

            return created();
        } catch (error: any) {
            return serverError(error);
        }
    }
}
