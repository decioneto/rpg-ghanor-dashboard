import { UserRepository } from '@/backend/data/repositories/user-repository';
import { AuthenticationService } from '@/backend/data/services/authentication';
import { NextResponse } from 'next/server';
import { badRequest, ok, serverError } from '../helpers';
import { Controller } from '../protocols';

export type Request = {
    username: string;
    password: string;
};

export class LoginController implements Controller {
    constructor(
        private userRepository: UserRepository,
        private authentication: AuthenticationService
    ) {}

    async handle(request: Request): Promise<NextResponse> {
        try {
            const exists = await this.userRepository.checkByUsername(
                request.username
            );
            if (!exists) {
                return badRequest(new Error('User does not exists'));
            }

            const authenticateModel = await this.authentication.execute({
                username: request.username,
                password: request.password,
            });

            return ok(authenticateModel);
        } catch (error: any) {
            return serverError(error);
        }
    }
}
