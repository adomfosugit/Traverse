import { ViewfinderCircleIcon } from '@heroicons/react/24/outline';
import {
  BanknotesIcon,
  Bars3BottomLeftIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import { TLand } from './land-purchase/LandSelection';

interface ILandDescriptionCardProps {
  land: TLand;
}
const LandDescriptionCard = ({ land }: ILandDescriptionCardProps) => {
  return (
    <div className=" mt-7 w-full flex h-auto bg-gray-100 rounded-lg hover:border hover:border-traverse-yellow">
      <Image
        src={land.imagePath}
        alt={land.location}
        width={100}
        height={100}
        className="w-2/12 h-auto hidden md:block md:m-4 rounded-lg"
      />
      <div className="w-4/6 flex-col ml-3 mt-4 mr-4">
        <div className="flex">
          <MapPinIcon className="text-gray-500 h-6 w-4 shrink-0" />
          <div className="flex">
            <p className="ml-3 font-semibold">{land.location} </p>
            <p className="text-gray-500 mr-3 ml-1">{land.region}</p>
          </div>
        </div>
        <div className="flex  text-gray-500 mt-4">
          <ViewfinderCircleIcon className="w-4 h-4 mt-1 shrink-0" />
          <p className="ml-3">
            {land.dimension} {land.dimensionUnit}
          </p>
        </div>
        <div className="flex  text-gray-500 mt-4">
          <Bars3BottomLeftIcon className="w-4 h-4 mt-1 shrink-0" />
          <p className="ml-3 mr-4 line-clamp-2">{land.description}</p>
        </div>
        <div className="flex text-traverse-yellow my-3 font-semibold">
          <BanknotesIcon className=" w-4 h-4 mt-1 shrink-0" />
          <p className="ml-3">
            {land.currency} {land.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LandDescriptionCard;
