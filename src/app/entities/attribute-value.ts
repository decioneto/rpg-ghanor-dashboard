import { randomUUID } from 'crypto';

export interface AttributeValueProps {
    id?: string;
    createdAt?: Date;
    value: string;
    attributeNameId: string;
}

export class AttributeValue {
    private _id: string;
    private props: AttributeValueProps;
    constructor(props: AttributeValueProps) {
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

    public set value(value: string) {
        this.props.value = value;
    }

    public get value() {
        return this.props.value;
    }

    public set attributeNameId(attributeNameId: string) {
        this.props.attributeNameId = attributeNameId;
    }

    public get attributeNameId() {
        return this.props.attributeNameId;
    }
}
