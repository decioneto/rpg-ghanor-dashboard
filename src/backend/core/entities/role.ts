import { randomUUID } from 'crypto';

export class Role {
    roleName: RoleNameEnum;

    constructor(roleName: RoleNameEnum) {
        this.roleName = roleName;
    }
}

const RoleType = {
    PLAYER: 'player',
    MASTER: 'master',
};

export type RoleNameEnum = keyof typeof RoleType;
