import { AttributeNameEnum } from '@/enums/AttributesNameEnum';
import { randomUUID } from 'crypto';

interface CharacterAttributes {
    attribute: AttributeNameEnum;
    value: string | string[];
}

export interface CharacterSheetsProps {
    id?: string;
    createdAt?: Date;
    userId: string;
    chName: string;
    charAttributes: CharacterAttributes[];
}

export class CharacterSheets {
    private _id: string;
    private props: CharacterSheetsProps;

    constructor(props: CharacterSheetsProps) {
        const { id } = props;

        this._id = id ?? randomUUID();
        this.props = props;
    }

    public get id() {
        return this._id;
    }

    public get createdAt() {
        return this.props.createdAt;
    }

    public get userId() {
        return this.props.userId;
    }

    public set chName(chName: string) {
        this.props.chName = chName;
    }

    public get chName() {
        return this.props.chName;
    }

    public set chAttributes(chAttributes: CharacterAttributes[]) {
        this.props.charAttributes = chAttributes;
    }

    public get chAttributes() {
        return this.props.charAttributes;
    }
}
