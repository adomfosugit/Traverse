import prisma from '../libs/prismadb';
export default async function getLands() {
  try {
    const lands = await prisma.land.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    const safeLands = lands.map((land) => ({
      ...land,
      createdAt: land.createdAt.toISOString(),
      updatedAt: land.updatedAt.toISOString(),
    }));
    return safeLands;
  } catch (error: any) {
    throw new Error(error);
  }
}
