'use client';
import { TSafeLand } from '../../types';
import Header from '../overview/Header';
import LandCard from './LandCard';
import LandMap from './LandMap';

export type TLand = {
  id: string;
  locationValue: string;
  imageSrc: string;
  region: string;
  landArea: number;
  landAreaUnit: string;
  description: string;
  price: number;
  title: string;
  currency: string;
  createdAt?: string;
};

interface ILandSelectionProps {
  lands: TSafeLand[];
}

const LandSelection = ({ lands }: ILandSelectionProps) => {
  const mapObjects = lands.map((land) => ({
    longitude: parseFloat(land.longitude),
    latitude: parseFloat(land.latitude),
    title: land.title,
    price: land.price,
    address: land.address,
  }));
  return (
    <div className="">
      <div className="flex relative w-full">
        <div className=" w-full xl:w-1/3 m-3">
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
        <div className=" hidden xl:inline w-7/12 2xl:w-6/12 ml-auto fixed max-h-screen mt-24 inset-3 mb-5">
          <p className="mt-6 text-base font-semibold">Plot Selection</p>
          <p className="text-gray-500 mt-2 mb-6">
            Select land from listing and associated fees
          </p>
          <div className="h-screen">
            <LandMap
              center={[mapObjects[0].latitude, mapObjects[0].longitude]}
              coordinates={mapObjects}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandSelection;
