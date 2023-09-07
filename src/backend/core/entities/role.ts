export type Role = {
    id?: string;
    roleName: RoleNameEnum;
    createdAt?: Date;
};

export type RoleNameEnum = 'player' | 'master';
