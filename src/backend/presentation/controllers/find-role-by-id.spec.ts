import { mockRole } from '@/backend/tests/mocks/entities/role-mock';
import { findRoleByIdSpy } from '@/backend/tests/mocks/use-cases/findRoleByIdUseCase';
import { FindRoleByIdController, Request } from './find-role-by-id';

type SutData = {
    sut: FindRoleByIdController;
};

const mockRequest: Request = {
    roleId: mockRole().id!,
};

function makeSut(): SutData {
    const findRoleByIdUsecase = new findRoleByIdSpy();
    const sut = new FindRoleByIdController(findRoleByIdUsecase);

    return {
        sut,
    };
}

describe('Find role by id', () => {
    it('Should return status 200', async () => {
        const { sut } = makeSut();
        const httpResponse = await sut.handle(mockRequest);

        console.log(httpResponse);
    });
});
