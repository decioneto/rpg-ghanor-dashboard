import { HasherRepository } from '@/backend/data/protocols/cryptography/hasher-repository';
import bcrypt from 'bcrypt';

export class BcryptAdapter implements HasherRepository {
    salt = 10;

    async hash(plainText: string): Promise<string> {
        return bcrypt.hash(plainText, this.salt);
    }

    async compare(plainText: string, digest: string): Promise<boolean> {
        return bcrypt.compare(plainText, digest);
    }
}
