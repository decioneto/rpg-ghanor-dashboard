import { User, UserProps } from '@/app/entities/user';

type Override = Partial<UserProps>;

export function makeUser(override: Override = {}) {
    return new User({
        username: 'decioneto',
        password: '1234',
    });
}
