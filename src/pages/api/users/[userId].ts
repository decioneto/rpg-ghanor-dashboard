import { GetSingleUser } from '@/main/use-cases/user/get-single-user';
import { PrismaService } from '@/infra/database/prisma/prisma-service';
import { PrismaUserRepository } from '@/infra/database/prisma/repositories/prisma-user-repository';
import { NextApiRequest, NextApiResponse } from 'next';
import { DeleteUser } from '@/main/use-cases/user/delete-user';

interface HandleSingleUserRequest extends NextApiRequest {
  query: {
    userId: string;
  };
}

export default async function HandleSingleUserController(
  req: HandleSingleUserRequest,
  res: NextApiResponse
) {
  const prismaService = new PrismaService();
  const userRepository = new PrismaUserRepository(prismaService);
  const { userId } = req.query;

  switch (req.method) {
    case 'GET':
      const getSingleUser = new GetSingleUser(userRepository);

      try {
        const { user } = await getSingleUser.execute({ userId });

        return res.status(200).json({
          data: {
            user: {
              id: user.id,
              createdAt: user.createdAt,
              username: user.username,
              roleId: user.roleId,
            },
          },
        });
      } catch (err: Error | any) {
        return res.status(400).json({
          message: err.message,
          status: 'failed',
        });
      }
    case 'DELETE':
      try {
        const deleteUser = new DeleteUser(userRepository);
        await deleteUser.execute({
          userId,
        });

        return res.status(200).json({
          data: {},
          status: 'success',
        });
      } catch (err: Error | any) {
        return res.status(400).json({
          message: err.message,
          status: 'failed',
        });
      }
    default:
      return res.status(405).json({
        message: 'Method not allowed',
        status: 'failed',
      });
  }
}
