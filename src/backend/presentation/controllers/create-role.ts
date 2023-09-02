import { CreateRoleUseCase } from '@/backend/core/use-cases';
import { RoleNameEnumModel } from '@/backend/data/models';
import { NextResponse } from 'next/server';
import { InvalidParamError } from '../errors';
import { badRequest, created, serverError } from '../helpers';
import { Controller } from '../protocols';

export type RoleRequest = {
    roleName: RoleNameEnumModel;
};

export class CreateRoleController implements Controller {
    constructor(private createRoleUsecase: CreateRoleUseCase) {}

    async handle(request: RoleRequest): Promise<NextResponse> {
        try {
            const { roleName } = request;
            if (roleName !== 'master' && roleName !== 'player') {
                return badRequest(new InvalidParamError(roleName));
            }

            await this.createRoleUsecase.create(roleName);

            return created();
        } catch (error: any) {
            return serverError(error);
        }
    }
}
