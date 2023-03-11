export class ValidatePassword {
    static execute(password: string) {
        const regex =
            /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;
        return regex.test(password);
    }
}
