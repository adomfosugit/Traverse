import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import { Prisma } from '@prisma/client';
import prisma from '../../../app/libs/prismadb';
import { PRISMA_UNIQUE_CONSTRAINT_CODE } from '../../../config/constants';

export async function POST(request: Request) {
  const body = await request.json();
  const { email, name, password } = body;

  const hashedPassword = await bcrypt.hash(password, 12);

  let user;
  try {
    user = await prisma.user.create({
      data: {
        email,
        name,
        hashedPassword,
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === PRISMA_UNIQUE_CONSTRAINT_CODE) {
        console.log(
          'There is a unique constraint violation, a new user cannot be created with this email'
        );
      }
    }
  }

  return NextResponse.json(user);
}
