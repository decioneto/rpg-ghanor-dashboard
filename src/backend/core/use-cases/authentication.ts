import { User } from '@prisma/client';

export type AuthParams = {
    username: string;
    password: string;
};

export type AuthResult = {
    accessToken: string;
    user: User;
};

export interface AuthenticationUseCase {
    execute: (authParams: AuthParams) => Promise<AuthResult>;
}
