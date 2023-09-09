export class UsernameInUserError extends Error {
    constructor() {
        super('The recieve username is already in use');
        this.name = 'UsernameInUserError';
    }
}
