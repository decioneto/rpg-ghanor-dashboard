import { randomUUID } from 'crypto';

export interface AttributeNameProps {
    id?: string;
    createdAt?: Date;
    name: string;
}

export class AttributeName {
    private _id: string;
    private props: AttributeNameProps;
    constructor(props: AttributeNameProps) {
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

    public set name(name: string) {
        this.props.name = name;
    }

    public get name() {
        return this.props.name;
    }
}
