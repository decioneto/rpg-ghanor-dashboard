import { CreateAttributeNameUseCase } from "@/backend/core/use-cases/create-attr-name";
import { NextResponse } from "next/server";
import { created, serverError } from "../helpers";
import { Controller } from "../protocols";

export type AttrNameRequest = {
    name: string
}

export class CreateAttrNameController implements Controller {
    constructor(private createAttributeNameUseCase: CreateAttributeNameUseCase) {};

    async handle(request: AttrNameRequest): Promise<NextResponse> {
        try {
            const { name } = request;

            await this.createAttributeNameUseCase.execute({name});

            return created();
        } catch (error: any) {
            return serverError(error);
        }
    };
}