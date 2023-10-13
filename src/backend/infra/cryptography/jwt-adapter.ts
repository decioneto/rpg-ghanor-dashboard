import { EncrypterRepository } from '@/backend/data/protocols/cryptography/encrypter-repository';
import jwt from 'jsonwebtoken';

export class JwtAdapter implements EncrypterRepository {
    constructor(private readonly secret: string | undefined) {};

    async encrypt(plainText: string): Promise<string> {
        if (!this.secret) return '';

        return jwt.sign({id: plainText}, this.secret);
    };

    async decrypt(cipherText: string): Promise<string> {
        if (!this.secret) return '';

        return String(jwt.verify(cipherText, this.secret));
    };
}