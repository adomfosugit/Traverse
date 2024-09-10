import { getServerSession } from 'next-auth/next';

import { authOptions } from '../../pages/api/auth/[...nextauth]';
import prisma from '../libs/prismadb';

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser() {
  try {
    const session = await getSession();
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
      include: {
        serviceProvider: true,
      },
    });

    if (!currentUser) {
      return null;
    }

    return {
      ...currentUser,
      createdAt: currentUser.createdAt.toISOString(),
      updatedAt: currentUser.updatedAt.toISOString(),
      accountVerified: currentUser.accountVerified?.toISOString() || null,
      serviceProvider: {
        ...currentUser?.serviceProvider,
        createdAt:
          currentUser?.serviceProvider &&
          currentUser?.serviceProvider.createdAt.toISOString(),
        updatedAt:
          currentUser?.serviceProvider &&
          currentUser?.serviceProvider.updatedAt.toISOString(),
        accountVerified:
          currentUser?.serviceProvider?.accountVerified &&
          currentUser?.serviceProvider?.accountVerified.toISOString(),
      },
    };
  } catch (error) {
    return null;
  }
}
