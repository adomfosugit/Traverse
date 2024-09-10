import { NextResponse } from 'next/server';
import getCurrentUser from '../../actions/getCurrentUser';

export async function POST(request: Request) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const body = await request.json();
  const { originalPrice, landOwnerId, landId, offer } = body;

  Object.keys(body).forEach((value: any) => {
    if (!body[value]) {
      NextResponse.error();
      return;
    }
  });

  const bid = await prisma?.bid.create({
    data: {
      originalPrice,
      landOwnerId,
      landId,
      offer: Number(offer),
      bidderId: currentUser.id,
    },
  });

  return NextResponse.json(bid);
}
