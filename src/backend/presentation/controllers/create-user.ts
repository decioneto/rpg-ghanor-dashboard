import { CreateUserUseCase } from '@/backend/core/use-cases';
import { UserModel } from '@/backend/data/models/user';
import { NextResponse } from 'next/server';
import { UsernameInUserError } from '../errors/username-in-use';
import { created, forbidden, serverError } from '../helpers';
import { Controller } from '../protocols';

export type Request = UserModel;

export class CreateUserController implements Controller {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    async handle(request: Request): Promise<NextResponse> {
        try {
            const { username, password, roleId } = request;
            const result = await this.createUserUseCase.execute({
                username,
                password,
                roleId,
            });

            if (!result) {
                return forbidden(new UsernameInUserError());
            }

            return created();
        } catch (error: any) {
            return serverError(error);
        }
    }
}
