import {
  BuildingLibraryIcon,
  ChevronRightIcon,
  UserIcon,
} from '@heroicons/react/24/solid';
import Link from 'next/link';
import { EEntryIconType } from '../../../types/common';

export interface IUserEntryCard {
  title: string;
  subtitle: string;
  icon: EEntryIconType;
  urlPath: string;
}
export const UserEntryCard = ({
  icon,
  title,
  subtitle,
  urlPath,
}: IUserEntryCard) => {
  return (
    <Link
      href={urlPath}
      className="h-32 w-full bg-gray-100 border border-gray-300 rounded-md overflow-hidden mt-2 hover:cursor-pointer hover:border-gray-400"
    >
      <span className="inline-grid grid-cols-7 h-full w-full items-center justify-center">
        {icon === EEntryIconType.USER && (
          <UserIcon className="h-9 w-9 col-span-1 md:ml-8" />
        )}
        {icon === EEntryIconType.SERVICE && (
          <BuildingLibraryIcon className="h-9 w-9 col-span-1 md:ml-8" />
        )}
        <span className="flex flex-col col-span-6 md:col-span-5 w-full md:ml-4">
          <h3 className="font-medium">{title}</h3>
          <p>{subtitle}</p>
        </span>
        <ChevronRightIcon className="col-span-1 h-5 w-5 mr-8 justify-self-end hidden md:inline-flex" />
      </span>
    </Link>
  );
};
