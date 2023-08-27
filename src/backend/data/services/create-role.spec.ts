import { Role } from '@/backend/core/entities';
import { mockRole } from '@/backend/tests/mocks/role-mock';
import { InMemoryRoleRepository } from '@/backend/tests/repositories/role-repository';
import { CreateRoleService } from './create-role';

interface MakeRoleProps {
    sut: CreateRoleService;
    roles: Role[];
}

function makeRole(): MakeRoleProps {
    const roleRepository = new InMemoryRoleRepository();
    const sut = new CreateRoleService(roleRepository);
    const roles: Role[] = roleRepository.roles;

    return {
        sut,
        roles,
    };
}

describe('Create Role', () => {
    it('should be able to create a role', async () => {
        const { sut, roles } = makeRole();
        const ruleMock = mockRole();

        sut.create(ruleMock.roleName);

        expect(roles).toHaveLength(1);
    });
});
