import { randomUUID } from 'crypto';

export interface CharacterSheetsProps {
    id?: string;
    createdAt?: Date;
    userId: string;
    chName: string;
}

export class CharacterSheet {
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

    public set userId(userId: string) {
        this.props.userId = userId;
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
}
