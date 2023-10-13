import { UserModel } from "@/backend/data/models/user";
import { User as RawUser } from "@prisma/client";

export class PrismaUserMapper {
    static toDomain(raw: RawUser): UserModel {
        return {
            id: raw.id,
            username: raw.username,
            password: raw.password,
            roleId: raw.roleId,
            createdAt: raw.createdAt
        }
    }
}