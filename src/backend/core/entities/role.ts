export type Role = {
    roleName: RoleNameEnum;
};

const RoleType = {
    PLAYER: 'player',
    MASTER: 'master',
};

export type RoleNameEnum = keyof typeof RoleType;
