export class CreateRoleError extends Error {
    constructor() {
        super('It was not possible to create a role');
        this.name = 'CreateRoleError';
    }
}
