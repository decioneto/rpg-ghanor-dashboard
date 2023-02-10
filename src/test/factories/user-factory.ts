import { Role } from '@/app/entities/role';
import { User, UserProps } from '@/app/entities/user';
import { RoleNameEnum } from '@/enums/RoleEnum';

type Override = Partial<UserProps>;

export function makeUser(override: Override = {}) {
    return new User({
        username: 'decioneto',
        password: '1234',
        role: new Role({
            roleName: RoleNameEnum.PLAYER,
        }),
        ...override,
    });
}
