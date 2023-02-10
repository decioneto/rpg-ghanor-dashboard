import { RoleNameEnum } from '@/enums/RoleEnum';
import { makeUser } from '@/test/factories/user-factory';
import { InMemoryRoleRepository } from '@/test/repositories/in-memory-role-repository';
import { CreateRole } from './create-role';

describe('Create Role', () => {
    it('should be able to create a role', async () => {
        const roleRepository = new InMemoryRoleRepository();
        const createRole = new CreateRole(roleRepository);

        const user = makeUser();

        const { role } = await createRole.execute({
            roleName: RoleNameEnum.MASTER,
        });

        expect(roleRepository.roles).toHaveLength(1);
        expect(roleRepository.roles[0]).toEqual(role);
    });
});
