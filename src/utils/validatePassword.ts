export class ValidatePassword {
    static haveMinLength(password: string | undefined) {
        if (!password) return;

        return password.length >= 8;
    }

    static hasUppercaseCharacters(password: string | undefined) {
        if (!password) return;

        const regex = /[A-Z]/;

        console.log('upper', regex.test(password));

        return regex.test(password);
    }

    static hasLowercaseCharacters(password: string | undefined) {
        if (!password) return;

        const regex = /(?=.*?[a-z])/;

        return regex.test(password);
    }

    static hasNumeral(password: string | undefined) {
        if (!password) return;

        const regex = /(?=.*?[0-9])/;

        return regex.test(password);
    }

    static hasSpecialCharacter(password: string | undefined) {
        if (!password) return;

        const regex = /(?=.*?[^\w\s])/;

        return regex.test(password);
    }
}
