import { RoleLevelEnum, RoleNameEnum } from '@/enums/RoleEnum';
import { Role } from '../entities/role';
import { User } from '../entities/user';
import { CreateUser } from './create-user';

describe('Create User', () => {
    it('should be able to create a user', () => {
        const createUser = new CreateUser();

        expect(
            createUser.execute({
                username: 'decioneeto',
                password: '12312',
                role: new Role({
                    roleName: RoleNameEnum.PLAYER,
                    roleLevel: RoleLevelEnum.PLAYER,
                }),
                characterSheets: null,
            })
        ).resolves.toBeInstanceOf(User);
    });
});
