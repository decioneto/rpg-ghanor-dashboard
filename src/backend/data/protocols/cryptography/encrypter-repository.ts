export interface EncrypterRepository {
    encrypt: (plainText: string) => Promise<string>;
    decrypt: (cipherText: string) => Promise<string>;
}
