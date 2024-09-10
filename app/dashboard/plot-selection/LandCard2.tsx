import { ViewfinderCircleIcon } from '@heroicons/react/24/outline';
import {
  BanknotesIcon,
  Bars3BottomLeftIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import { Land } from '@prisma/client';
import Image from 'next/image';
import Link from 'next/link';
import { DASH_PROJECT_DETAIL } from '../../../config/constants';

interface ILandCardProps {
  land: Land;
}
const LandCard2 = ({ land }: ILandCardProps) => {
  return (
    <Link
      href={DASH_PROJECT_DETAIL}
      className=" mt-7 w-full flex h-auto bg-gray-100 rounded-lg hover:border hover:border-traverse-yellow"
    >
      <Image
        src={'https://via.placeholder.com/600x400'}
        alt={'asdf'}
        width={100}
        height={100}
        className="w-2/6 h-auto hidden md:block rounded-l-lg"
      />
      <div className="w-4/6 flex-col ml-3 mt-3 mr-4">
        <div className="flex">
          <MapPinIcon className="text-gray-500 h-6 w-4 shrink-0" />
          <div className="flex">
            <p className="ml-3 font-semibold">{land.title} </p>
            <p className="text-gray-500 mr-3 ml-1">(Accra)</p>
          </div>
        </div>
        <div className="flex  text-gray-500 mt-2">
          <ViewfinderCircleIcon className="w-4 h-4 mt-1 shrink-0" />
          <p className="ml-3">
            {land.landArea} m<sup>2</sup>
          </p>
        </div>
        <div className="flex  text-gray-500 mt-2">
          <Bars3BottomLeftIcon className="w-4 h-4 mt-1 shrink-0" />
          <p className="ml-3 mr-4 line-clamp-2">{land.description}</p>
        </div>
        <div className="flex text-traverse-yellow my-2 font-semibold">
          <BanknotesIcon className=" w-4 h-4 mt-1 shrink-0" />
          <p className="ml-3">$ {land.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default LandCard2;
