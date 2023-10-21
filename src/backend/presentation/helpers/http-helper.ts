import { NextResponse } from 'next/server';
import { ServerError, UnauthorizedError } from '../errors';

export const badRequest = (error: Error) => {
    return NextResponse.json({ data: error.message }, { status: 400 });
};

export const forbidden = (error: Error) => {
    return NextResponse.json({ data: error }, { status: 403 });
};

export const unauthorized = () => {
    return NextResponse.json(
        { data: new UnauthorizedError() },
        { status: 401 }
    );
};

export const serverError = (err: Error) => {
    return NextResponse.json(
        { data: new ServerError(err.stack) },
        { status: 400 }
    );
};

export const ok = (data: any) => {
    return NextResponse.json({ data: data }, { status: 200 });
};

export const created = () => NextResponse.json({ data: '' }, { status: 201 });

export const noContent = () => NextResponse.json({ data: '' }, { status: 204 });
