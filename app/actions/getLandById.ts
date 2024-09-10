import prisma from '../libs/prismadb';
interface IParams {
  landId?: string;
}
export default async function getLandById(params: IParams) {
  try {
    const { landId } = params;
    const land = await prisma.land.findUnique({
      where: {
        id: landId,
      },
      include: {
        user: true,
        documents: true,
        images: true,
        bids: {
          include: {
            user: true,
          },
        },
        landCost: true,
        services: {
          include: {
            documents: true,
            images: true,
          },
        },
      },
    });

    if (!land) {
      return null;
    }

    let totalCost = 0;
    if (land.landCost) {
      for (const value of Object.values(land.landCost)) {
        if (value && typeof value === 'number') {
          totalCost += value;
        }
      }
    }

    return {
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
      services: land.services.map((service) => ({
        ...service,
        createdAt: service.createdAt.toISOString(),
        updatedAt: service.updatedAt.toISOString(),
        documents: service.documents.map((document) => ({
          ...document,
          createdAt: document.createdAt.toISOString(),
          updatedAt: document.updatedAt.toISOString(),
        })),
        images: service.images.map((image) => ({
          ...image,
          createdAt: image.createdAt.toISOString(),
          updatedAt: image.updatedAt.toISOString(),
        })),
      })),
      bids: land.bids.map((bid) => ({
        ...bid,
        user: {
          ...bid.user,
          createdAt: bid.user.createdAt.toISOString(),
          updatedAt: bid.user.updatedAt.toISOString(),
          accountVerified: bid.user.accountVerified?.toISOString() ?? null,
        },
        createdAt: bid.createdAt.toISOString(),
        updatedAt: bid.updatedAt.toISOString(),
      })),
      totalCost: totalCost,
    };
  } catch (error: any) {
    throw new Error(error);
  }
}
