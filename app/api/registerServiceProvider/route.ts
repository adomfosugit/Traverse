import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

import { Prisma } from '@prisma/client';
import prisma from '../../../app/libs/prismadb';
import { PRISMA_UNIQUE_CONSTRAINT_CODE } from '../../../config/constants';

export async function POST(request: Request) {
  const body = await request.json();
  const {
    country,
    profession,
    phone,
    officeAddress,
    businessName,
    email,
    professionalMembership,
    membershipId,
    password,
  } = body;

  const hashedPassword = await bcrypt.hash(password, 12);
  let user;
  try {
    user = await prisma.user.create({
      data: {
        email,
        name: businessName,
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
  const userId = user?.id;
  if (userId) {
    try {
      await prisma.serviceProvider.create({
        data: {
          country,
          profession,
          phone,
          officeAddress,
          businessName,
          email,
          professionalMembership,
          membershipId,
          userId,
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
  }

  return NextResponse.json(user);
}
