import { randomUUID } from 'crypto';
import { CharacterSheets } from './characterSheets';
import { Role } from './role';

export interface UserProps {
    id?: string;
    createdAt?: Date;
    username: string;
    password: string;
    role: Role;
    characterSheets: CharacterSheets[] | null;
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

    public get passwors() {
        return this.props.password;
    }

    public get roles() {
        return this.props.role;
    }

    public get characterSheets() {
        return this.props.characterSheets;
    }
}
