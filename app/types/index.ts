import {
  Bid,
  Document,
  Land,
  LandCost,
  LandImage,
  LandService,
  ServiceProvider,
  User,
} from '@prisma/client';

export type TSafeUser = Omit<
  User,
  'createdAt' | 'updatedAt' | 'accountVerified'
> & {
  createdAt: string;
  updatedAt: string;
  accountVerified: string | null;
  serviceProvider?: TSafeServiceProvider | null;
};

export type TSafeServiceProvider = Omit<
  ServiceProvider,
  | 'id'
  | 'userId'
  | 'initialPassword'
  | 'country'
  | 'profession'
  | 'phone'
  | 'officeAddress'
  | 'businessName'
  | 'email'
  | 'professionalMembership'
  | 'membershipId'
  | 'createdAt'
  | 'updatedAt'
  | 'accountVerified'
> & {
  id?: string | null;
  userId?: string | null;
  initialPassword?: string | null;
  country?: string | null;
  profession?: string | null;
  phone?: string | null;
  officeAddress?: string | null;
  businessName?: string | null;
  email?: string | null;
  professionalMembership?: string | null;
  membershipId?: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  accountVerified?: string | null;
};

export type TSafeDocument = Omit<Document, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};

export type TSafeBid = Omit<Bid, 'createdAt' | 'updatedAt' | 'user'> & {
  createdAt: string;
  updatedAt: string;
  user: TSafeUser;
};

export type TSafeImage = Omit<LandImage, 'createdAt' | 'updatedAt'> & {
  createdAt: string;
  updatedAt: string;
};
export type TSafeLand = Omit<
  Land,
  'createdAt' | 'updatedAt' | 'bids' | 'service'
> & {
  createdAt: string;
  updatedAt: string;
};

export type TSafeService = Omit<
  LandService,
  'createdAt' | 'updatedAt' | 'documents' | 'images'
> & {
  createdAt: string;
  updatedAt: string;
  documents: TSafeDocument[];
  images: TSafeImage[];
};

export type TSafeLandElement = TSafeLand & {
  bids: TSafeBid[];
  user: TSafeUser;
  documents: TSafeDocument[];
  landCost: LandCost | null;
  services: TSafeService[];
  totalCost: number;
};
