import { RoleLevelEnum, RoleNameEnum } from '@/enums/RoleEnum';
import { randomUUID } from 'crypto';

export interface RoleProps {
    id?: string;
    userId?: string | null;
    createdAt?: Date;
    roleName: RoleNameEnum;
    roleLevel?: RoleLevelEnum;
}

export class Role {
    private _id: string;
    private props: RoleProps;

    constructor(props: RoleProps) {
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

    public set userId(userId: string | null | undefined) {
        this.props.userId = userId;
    }

    public get userId() {
        return this.props.userId;
    }

    public set roleName(roleName: RoleNameEnum) {
        this.props.roleName = roleName;
    }

    public get roleName() {
        return this.props.roleName;
    }

    public set roleLevel(roleLevel: RoleLevelEnum | undefined) {
        this.props.roleLevel = roleLevel;
    }

    public get roleLevel() {
        return this.props.roleLevel;
    }
}
