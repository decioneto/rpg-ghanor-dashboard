import { RoleNameEnum } from '@/enums/RoleEnum';
import { makeRole } from '@/test/factories/role-factory';
import { makeUser } from '@/test/factories/user-factory';
import { InMemoryRoleRepository } from '@/test/repositories/in-memory-role-repository';
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { CreateRole } from './create-role';
import { CreateUser } from './create-user';

describe('Create User', () => {
    it('should be able to create a user', async () => {
        const userRepository = new InMemoryUserRepository();
        const roleRepository = new InMemoryRoleRepository();
        const createUser = new CreateUser(userRepository, roleRepository);
        const createRole = new CreateRole(roleRepository);

        const role = makeRole();

        await createRole.execute({ roleName: role.roleName });

        const { user } = await createUser.execute({
            username: 'decioneeto',
            password: '12312',
            roleName: role.roleName,
        });

        expect(userRepository.users).toHaveLength(1);
        expect(userRepository.users[0]).toEqual(user);
    });

    it('should not be able to create a user with same username', async () => {
        const userRepository = new InMemoryUserRepository();
        const roleRepository = new InMemoryRoleRepository();

        const createUser = new CreateUser(userRepository, roleRepository);
        const createRole = new CreateRole(roleRepository);

        const user = await makeUser();
        const role = makeRole();

        await createRole.execute({ roleName: role.roleName });

        await createUser.execute({
            username: user.username,
            password: user.password,
            roleName: role.roleName,
        });

        expect(async () => {
            return await createUser.execute({
                username: 'decioneto',
                password: '12312',
                roleName: RoleNameEnum.PLAYER,
            });
        }).toThrowError;
    });
});
