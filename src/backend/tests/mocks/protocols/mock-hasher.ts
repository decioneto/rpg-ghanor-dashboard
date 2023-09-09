import { HasherRepository } from '@/backend/data/protocols/cryptography/hasher-repository';
import { randomUUID } from 'crypto';

export class HasherSpy implements HasherRepository {
    digest = randomUUID();
    plaintext?: string;
    isValid = true;

    async hash(plainText: string): Promise<string> {
        this.plaintext = plainText;
        return this.digest;
    }

    async compare(plainText: string, digest: string): Promise<boolean> {
        this.plaintext = plainText;
        this.digest = digest;
        return this.isValid;
    }
}
