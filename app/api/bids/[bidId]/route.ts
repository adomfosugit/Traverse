import { NextResponse } from 'next/server';
import getCurrentUser from '../../../actions/getCurrentUser';
import prisma from '../../../libs/prismadb';

interface IParams {
  bidId?: string;
}

export async function POST(request: Request, { params }: { params: IParams }) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { bidId } = params;

  if (!bidId || typeof bidId !== 'string') {
    throw new Error('Invalid ID');
  }

  const bid = await prisma.bid.update({
    where: {
      id: bidId,
    },
    data: {
      ownerDecision: 'Accepted',
    },
  });

  return NextResponse.json(bid);
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return NextResponse.error();
  }

  const { bidId } = params;

  if (!bidId || typeof bidId !== 'string') {
    throw new Error('Invalid ID');
  }

  const bid = await prisma.bid.update({
    where: {
      id: bidId,
    },
    data: {
      ownerDecision: 'Rejected',
    },
  });

  return NextResponse.json(bid);
}
