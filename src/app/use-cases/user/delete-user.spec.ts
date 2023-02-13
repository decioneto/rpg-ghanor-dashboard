import { makeRole } from '@/test/factories/role-factory';
import { makeUser } from '@/test/factories/user-factory';
import { InMemoryRoleRepository } from '@/test/repositories/in-memory-role-repository';
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { DeleteUser } from './delete-user';
import { CreateRole } from '../role/create-role';
import { CreateUser } from './create-user';

describe('Delete user', () => {
    it('should be able to delete a user', async () => {
        const userRepository = new InMemoryUserRepository();
        const roleRepository = new InMemoryRoleRepository();
        const deleteUser = new DeleteUser(userRepository);
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

        await deleteUser.execute({ userId: user.id });

        expect(userRepository.users).toHaveLength(0);
    });

    it('should not be able to delete a non existing user', async () => {
        const userRepository = new InMemoryUserRepository();
        const roleRepository = new InMemoryRoleRepository();
        const deleteUser = new DeleteUser(userRepository);
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
            await deleteUser.execute({ userId: '123' });
        }).toThrowError;
    });
});
