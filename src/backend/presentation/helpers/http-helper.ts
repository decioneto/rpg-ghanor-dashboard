import { NextResponse } from 'next/server';
import { ServerError, UnauthorizedError } from '../errors';
import { HttpResponse } from '../protocols';

export const badRequest = (error: Error): HttpResponse => ({
    statusCode: 400,
    data: error,
});

export const forbidden = (error: Error): HttpResponse => ({
    statusCode: 403,
    data: error,
});

export const unauthorized = (): HttpResponse => ({
    statusCode: 401,
    data: new UnauthorizedError(),
});

export const serverError = (err: Error) => {
    return NextResponse.json(
        { data: new ServerError(err.stack) },
        { status: 400 }
    );
};

export const ok = (data: any): HttpResponse => ({
    statusCode: 200,
    data: data,
});

export const created = () => NextResponse.json({ data: '' }, { status: 201 });

export const noContent = (): HttpResponse => ({
    statusCode: 204,
    data: null,
});
