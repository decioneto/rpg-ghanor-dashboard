import { Role } from '@/backend/core/entities';

export const mockRole = (): Role => ({
    id: '1',
    roleName: 'master',
    createdAt: new Date(),
});
