import { CreateRoleController, RoleRequest } from './create-role';
import { CreateRoleSpy } from '@/backend/tests/mocks/use-cases/roleUseCases';
import { mockRole } from '@/backend/tests/mocks/entities/role-mock';
import { created } from '../helpers';

type SutData = {
    sut: CreateRoleController;
};

const mockRequest: RoleRequest = {
    role: mockRole(),
};

function makeSut(): SutData {
    const createRoleUsecase = new CreateRoleSpy();
    const sut = new CreateRoleController(createRoleUsecase);
    return {
        sut,
    };
}

describe('Create role controller', () => {
    it('Should return 201 with valid data receive', async () => {
        const { sut } = makeSut();
        const httpResponse = await sut.handle(mockRequest);

        expect(httpResponse).toEqual(created());
    });
});
