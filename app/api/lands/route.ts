import { NextResponse } from 'next/server';
import { DEFAULT_LAND_COSTS } from '../../../config/data';
import getCurrentUser from '../../actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const {
    title,
    description,
    imageSrc,
    category,
    landArea,
    otherLands,
    interestType,
    landUse,
    location,
    price,
  } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
    }
  });

  let land, error: any;

  if (prisma) {
    await prisma
      .$transaction(async (tx) => {
        land = await tx.land.create({
          data: {
            title,
            description,
            imageSrc: imageSrc,
            category,
            landArea,
            otherLands,
            landUse: category,
            interestType,
            address: location.value,
            latitude: location.latlng[0].toString(),
            longitude: location.latlng[1].toString(),
            price: parseInt(price, 10),
            userId: currentUser.id,
          },
        });

        if (!land.id) {
          throw new Error(`Land creation failed`);
        }
        const landId = land?.id;
        await tx.landCost.create({
          data: {
            landId: landId,
            landOwnerId: land.userId,
            ...DEFAULT_LAND_COSTS,
          },
        });
      })
      .catch(async (e) => {
        console.log('error');
        console.error(e);
        error = e;
        return NextResponse.error();
      });
  }

  if (error) {
    return NextResponse.error();
  } else {
    return NextResponse.json(land);
  }
}
