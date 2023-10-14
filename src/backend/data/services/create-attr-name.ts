import { CreateAttributeNameUseCase } from "@/backend/core/use-cases/create-attr-name";
import { AttributeNameModel } from "../models/attr-name";
import { AttrNameRepository } from "../repositories/attr-name-repository";

export class CreateAttrName implements CreateAttributeNameUseCase {
    constructor(private attrNameRepository: AttrNameRepository) {}

    async execute(attrName: AttributeNameModel): Promise<void> {
        await this.attrNameRepository.create(attrName)
    };
}