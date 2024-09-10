import Image from 'next/image';
import { LONG_DESCRIPTION } from '../../../config/constants';
import LandCard from '../LandCard';
import Header from '../overview/Header';

export type TLand = {
  id: string;
  location: string;
  imagePath: string;
  region: string;
  dimension: number;
  dimensionUnit: string;
  description: string;
  price: number;
  currency: string;
};

const LandSelection = () => {
  const lands: TLand[] = [
    {
      id: '1',
      location: 'Afienya',
      imagePath: 'https://via.placeholder.com/600x400',
      region: 'Greater Accra Region',
      dimension: 2,
      dimensionUnit: 'acres',
      description: LONG_DESCRIPTION,
      price: 130000,
      currency: 'GHS',
    },
    {
      id: '1',
      location: 'Afienya',
      imagePath: 'https://via.placeholder.com/600x400',
      region: 'Greater Accra Region',
      dimension: 2,
      dimensionUnit: 'acres',
      description: LONG_DESCRIPTION,
      price: 130000,
      currency: 'GHS',
    },

    {
      id: '1',
      location: 'Afienya',
      imagePath: 'https://via.placeholder.com/600x400',
      region: 'Greater Accra Region',
      dimension: 2,
      dimensionUnit: 'acres',
      description: LONG_DESCRIPTION,
      price: 130000,
      currency: 'GHS',
    },

    {
      id: '1',
      location: 'Afienya',
      imagePath: 'https://via.placeholder.com/600x400',
      region: 'Greater Accra Region',
      dimension: 2,
      dimensionUnit: 'acres',
      description: LONG_DESCRIPTION,
      price: 130000,
      currency: 'GHS',
    },

    {
      id: '1',
      location: 'Afienya',
      imagePath: 'https://via.placeholder.com/600x400',
      region: 'Greater Accra Region',
      dimension: 2,
      dimensionUnit: 'acres',
      description: LONG_DESCRIPTION,
      price: 130000,
      currency: 'GHS',
    },
    {
      id: '1',
      location: 'Afienya',
      imagePath: 'https://via.placeholder.com/600x400',
      region: 'Greater Accra Region',
      dimension: 2,
      dimensionUnit: 'acres',
      description: LONG_DESCRIPTION,
      price: 130000,
      currency: 'GHS',
    },

    {
      id: '1',
      location: 'Afienya',
      imagePath: 'https://via.placeholder.com/600x400',
      region: 'Greater Accra Region',
      dimension: 2,
      dimensionUnit: 'acres',
      description: LONG_DESCRIPTION,
      price: 130000,
      currency: 'GHS',
    },

    {
      id: '1',
      location: 'Afienya',
      imagePath: 'https://via.placeholder.com/600x400',
      region: 'Greater Accra Region',
      dimension: 2,
      dimensionUnit: 'acres',
      description: LONG_DESCRIPTION,
      price: 130000,
      currency: 'GHS',
    },
  ];
  return (
    <div className="">
      <div className="flex relative w-full">
        <div className="w-1/3 m-3">
          <Header
            title="All Listings"
            subText="NB: Lands are not owned by Traverse"
          />
          <p className="text-gray-500 mt-4 mb-3 text-sm">Search Location</p>
          <input
            placeholder="Enter a location"
            className="w-full bg-gray-100 h-11 p-3"
          />
          {lands.map((land) => (
            <LandCard key={land.id} land={land} />
          ))}
        </div>
        <div className="w-5/12 ml-auto fixed max-h-screen mt-24 inset-3">
          <p className="mt-6 text-base font-semibold">Plot Selection</p>
          <p className="text-gray-500 mt-2 mb-6">
            Select land from listing and associated fees
          </p>
          <div>
            <Image
              src={'/images/map.svg'}
              height={100}
              width={100}
              alt="map"
              className="w-full h-screen object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandSelection;
