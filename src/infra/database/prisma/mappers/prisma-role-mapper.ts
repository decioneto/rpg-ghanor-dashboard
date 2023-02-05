import { Role } from '@/app/entities/role';
import { Role as RawRole } from '@prisma/client';

export class PrismaRoleMapper {
    static toDomain(raw: RawRole): Role {
        return new Role({
            id: raw.id,
            createdAt: raw.createdAt,
            roleName: raw.roleName,
            roleLevel: raw.roleLevel,
        });
    }
}
