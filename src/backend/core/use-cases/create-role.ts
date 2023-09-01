import { Role } from '../entities';

export interface CreateRoleUseCase {
    create: (role: Role) => Promise<void>;
}
