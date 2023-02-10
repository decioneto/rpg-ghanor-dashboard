import { makeRole } from '@/test/factories/role-factory';
import { InMemoryRoleRepository } from '@/test/repositories/in-memory-role-repository';
import { GetRole } from './get-role';

describe('Get role by id', () => {
    it('should be able to get a role', async () => {
        const roleRepository = new InMemoryRoleRepository();
        const getRole = new GetRole(roleRepository);

        const newRole = makeRole();

        await roleRepository.create(newRole);

        const { role } = await getRole.execute({
            roleId: newRole.id,
        });

        expect(role).toEqual(newRole);
    });
});
