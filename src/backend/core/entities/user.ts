import { randomUUID } from 'crypto';

export class User {
    id?: string;
    username: string;
    password: string;
    roleId: string;

    constructor(username: string, password: string, roleId: string) {
        this.id = randomUUID();
        this.username = username;
        this.password = password;
        this.roleId = roleId;
    }
}
