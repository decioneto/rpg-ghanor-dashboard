import { randomUUID } from 'crypto';

export interface UserProps {
    id?: string;
    createdAt?: Date;
    username: string;
    password: string;
    roleId: string;
}

export class User {
    private _id: string;
    private props: UserProps;

    constructor(props: UserProps) {
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

    public set username(username: string) {
        this.props.username = username;
    }

    public get username() {
        return this.props.username;
    }

    public set password(password: string) {
        this.props.password = password;
    }

    public get password() {
        return this.props.password;
    }

    public set roleId(roleId: string) {
        this.props.roleId = roleId;
    }

    public get roleId() {
        return this.props.roleId;
    }
}
