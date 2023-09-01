import { NextResponse } from 'next/server';

export interface Controller<T = any> {
    handle: (request: T) => Promise<NextResponse>;
}
