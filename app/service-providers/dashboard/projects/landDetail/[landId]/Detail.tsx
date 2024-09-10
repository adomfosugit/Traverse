'use client';

import { LandCost } from '@prisma/client';

import AdditionalInfo from './AdditionalInfo';
import CostBreakdown from './CostBreakdown';
import Gallery from './Gallery';

import { DASH_DETAIL_PAYMENT } from '../../../../../../config/constants';
import Header from '../../../../../dashboard/overview/Header';
import {
  TSafeBid,
  TSafeDocument,
  TSafeLand,
  TSafeUser,
} from '../../../../../types';
import Bids from './Bids';

interface IDetailProps {
  land: TSafeLand & {
    bids: TSafeBid[];
    user: TSafeUser;
    documents: TSafeDocument[];
    landCost: LandCost | null;
    totalCost: number;
  };
  currentUser?: TSafeUser | null;
  userBidStatus?: boolean;
}
export type TDetailQuery = {
  lId?: string | null;
  loId?: string | null;
  oP?: number | null;
};

const Detail = ({ land, currentUser }: IDetailProps) => {
  return (
    <div className="">
      <div className="mx-10">
        <Header
          backText="Back"
          title={land.title}
          subText={land.description}
          buttonText="Continue"
          linkPath={`${DASH_DETAIL_PAYMENT}/${land?.id}`}
        />
        <Gallery land={land} />
        <AdditionalInfo land={land} />
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="bg-gray-100 ">
            <Bids bids={land?.bids} />
          </div>
          <div className="bg-gray-100 ">
            <CostBreakdown
              landCost={land.landCost}
              totalCost={land.totalCost}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
