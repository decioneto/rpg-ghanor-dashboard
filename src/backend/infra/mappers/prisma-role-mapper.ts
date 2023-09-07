import { RoleModel, RoleNameEnumModel } from '@/backend/data/models';
import { Role as RawRole } from '@prisma/client';

export class PrismaRoleMapper {
    static toDomain(raw: RawRole): RoleModel {
        return {
            id: raw.id,
            roleName: PrismaRoleMapper.handleRoleName(raw.roleName),
            createdAt: raw.createdAt,
        };
    }

    static handleRoleName(value: string): RoleNameEnumModel {
        return value === 'player' ? 'player' : 'master';
    }
}
