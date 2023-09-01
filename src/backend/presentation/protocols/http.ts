import { NextResponse } from 'next/server';

export interface HttpResponse {
    statusCode: number;
    data: any;
}
