import { Role } from '@/backend/core/entities';
import { mockRole } from '@/backend/tests/mocks/entities/role-mock';
import { InMemoryRoleRepository } from '@/backend/tests/repositories/role-repository';
import { FindRoleByIdService } from './find-role-by-id';

interface MakeRoleProps {
    sut: FindRoleByIdService;
    roles: Role[];
}

function makeRole(): MakeRoleProps {
    const roleRepository = new InMemoryRoleRepository();
    const sut = new FindRoleByIdService(roleRepository);
    const roles: Role[] = roleRepository.roles;

    return {
        sut,
        roles,
    };
}

describe('Find role by id', () => {
    it('Should be able to retrieve a role', async () => {
        const { roles, sut } = makeRole();
        const roleMock = mockRole();
        roles.push(roleMock);
        const found = await sut.findById(roleMock.id!);

        expect(found).toEqual(roles[0]);
    });
});
