import prisma from '../libs/prismadb';
import getCurrentUser from './getCurrentUser';
export default async function getBrokerLands() {
  try {
    const currentUser = await getCurrentUser();
    if (!currentUser) {
      return [];
    }
    const lands = await prisma.land.findMany({
      where: {
        userId: currentUser.id,
      },
      include: {
        user: true,
        documents: true,
        images: true,
        bids: true,
        landCost: true,
      },
    });

    if (!lands || lands.length === 0) {
      return null;
    }

    const safeLands = lands.map((land) => ({
      ...land,
      createdAt: land.createdAt.toISOString(),
      updatedAt: land.updatedAt.toISOString(),
      user: {
        ...land.user,
        createdAt: land.user.createdAt.toISOString(),
        updatedAt: land.user.createdAt.toISOString(),
        accountVerified: land.user.accountVerified?.toISOString() ?? null,
      },
      documents: land.documents.map((document) => ({
        ...document,
        createdAt: document.createdAt.toISOString(),
        updatedAt: document.updatedAt.toISOString(),
      })),
      images: land.images.map((image) => ({
        ...image,
        createdAt: image.createdAt.toISOString(),
        updatedAt: image.updatedAt.toISOString(),
      })),
      bids: land.bids.map((bid) => ({
        ...bid,
        createdAt: bid.createdAt.toISOString(),
        updatedAt: bid.updatedAt.toISOString(),
      })),
    }));

    return safeLands;
  } catch (error: any) {
    throw new Error(error);
  }
}
