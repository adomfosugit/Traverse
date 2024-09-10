import { TSafeLand, TSafeUser } from '../../../../types';
import { currencyFormat } from '../../../../utils';

interface IAdditionalInfoProps {
  land: TSafeLand & {
    user: TSafeUser;
  };
  currentUser?: TSafeUser | null;
}

const AdditionalInfo = ({ land, currentUser }: IAdditionalInfoProps) => {
  return (
    <div className="h-auto  w-full bg-gray-100">
      <p className="ml-4 text-gray-600 font-semibold py-8">
        Additional Information
      </p>
      <div className="flex justify-between pb-8 mr-20">
        <div className="flex-col mx-4">
          <div className="text-gray-500 text-sm">Price</div>
          <div className="font-semibold">{currencyFormat(land.price)}</div>
        </div>
        <div className="flex-col">
          <div className="text-gray-500 text-sm">Plot Size</div>
          <div className="font-semibold">
            {land.landArea} m<sup>2</sup>
          </div>
        </div>
        <div className="flex-col">
          <div className="text-gray-500 text-sm">Land Type</div>
          <div className="font-semibold">{land.landType}</div>
        </div>
        <div className="flex-col">
          <div className="text-gray-500 text-sm">Land Use</div>
          <div className="font-semibold">{land.landUse}</div>
        </div>
        <div className="flex-col">
          <div className="text-gray-500 text-sm">Interest Type</div>
          <div className="font-semibold">{land.interestType}</div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
