import { User } from '@/backend/core/entities';

export const mockUser = (): User => ({
    username: 'test-name',
    password: '123',
    roleId: '1',
    createdAt: new Date(),
});
