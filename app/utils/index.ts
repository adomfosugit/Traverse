import { Prisma } from '@prisma/client';
import {
  ERROR_USER_EXISTS,
  PRISMA_UNIQUE_CONSTRAINT_CODE,
} from '../../config/constants';
import { TSafeLandElement } from '../types';
import { EServiceOptions } from '../types/common';

export const handleError = (error: any) => {
  const { log } = console;
  let errorMessage;
  if (error instanceof Prisma.PrismaClientKnownRequestError) {
    if (error.code === PRISMA_UNIQUE_CONSTRAINT_CODE) {
      log(
        'There is a unique constraint violation, a new user cannot be created with this email'
      );
      errorMessage = ERROR_USER_EXISTS;
    }
  } else {
    errorMessage = error?.message;
  }
  return { error: { message: errorMessage } };
};

export const currencyFormat = (amount: number) => {
  return '$' + amount.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
};

export const getLandStageService = (
  land: TSafeLandElement | null,
  stage: EServiceOptions
) => land?.services.filter((service) => service.serviceProvided === stage)[0];
