import { makeRole } from '@/test/factories/role-factory';
import { makeUser } from '@/test/factories/user-factory';
import { InMemoryRoleRepository } from '@/test/repositories/in-memory-role-repository';
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { AuthenticateUser } from './authenticate-user';

describe('Authenticate user', () => {
    it('Should be able to authenticate a user', async () => {
        const userRepository = new InMemoryUserRepository();
        const roleRepository = new InMemoryRoleRepository();
        const authenticateUser = new AuthenticateUser(
            userRepository,
            roleRepository
        );

        const newRole = makeRole();

        await roleRepository.create(newRole);

        const newUser = await makeUser({
            roleId: roleRepository.roles[0].id,
        });

        await userRepository.create(newUser);

        const { user, role, token } = await authenticateUser.execute({
            username: 'decioneto',
            password: '1234',
        });

        expect(user.username).toEqual(userRepository.users[0].username);
        expect({ role, token }).toBeTruthy();
    });
});
