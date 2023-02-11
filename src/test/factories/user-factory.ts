import { User, UserProps } from '@/app/entities/user';
import { hash } from 'bcryptjs';

type Override = Partial<UserProps>;

export async function makeUser(override: Override = {}) {
    const passwordHash = await hash('1234', 8);

    return new User({
        username: 'decioneto',
        password: passwordHash,
        roleId: '25067227-3a0c-47f4-ac7a-ae8273f54a4f',
        ...override,
    });
}
