import { makeRole } from '@/test/factories/role-factory';
import { makeUser } from '@/test/factories/user-factory';
import { InMemoryRoleRepository } from '@/test/repositories/in-memory-role-repository';
import { InMemoryUserRepository } from '@/test/repositories/in-memory-user-repository';
import { CreateUserRole } from './create-user-role';

describe('Create UserRole', () => {
    it('should be able to create a userRole', async () => {
        const userRepository = new InMemoryUserRepository();
        const roleRepository = new InMemoryRoleRepository();
        const createUserRole = new CreateUserRole(
            userRepository,
            roleRepository
        );

        const newUser = makeUser();
        const newRole = makeRole();

        userRepository.create(newUser);
        roleRepository.create(newRole);

        await createUserRole.execute({
            userId: newUser.id,
            roleId: newRole.id,
        });

        expect(userRepository.users[0].role).toEqual(newRole);
    });
});
