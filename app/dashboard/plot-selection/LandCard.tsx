import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { AiOutlineHeart } from 'react-icons/ai';
import { DASH_PROJECT_DETAIL } from '../../../config/constants';
import { TSafeLand } from '../../types';
import { currencyFormat } from '../../utils';

interface ILandCardProps {
  land: TSafeLand;
}
const LandCard = ({ land }: ILandCardProps) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(`${DASH_PROJECT_DETAIL}/${land.id}`)}
      className="flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t justify-between"
    >
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0 group">
        <Image
          src={land.imageSrc[0]}
          alt="Land image"
          fill
          className="rounded-2xl h-full w-full group-hover:scale-105 transition object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow pl-5 ml-auto justify-items-end">
        <div className="flex justify-between">
          <p>{land.address}</p>
          <AiOutlineHeart
            size={28}
            className="fill-white absolute -top-[2px] -right-[2px]"
          />
        </div>
        <h4 className="text-xl">{land.title}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow line-clamp-4">
          {land.description}
        </p>
        <div className="flex justify-end">
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">
              {currencyFormat(land.price)}
            </p>
            <p className="text-right font-extralight">
              {land.landArea} m<sup>2</sup>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandCard;
