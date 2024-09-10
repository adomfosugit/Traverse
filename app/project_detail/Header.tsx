import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { DASH_URL, PROJECTS_URL } from '../../config/constants';

const Header = () => {
  return (
    <>
      <Link href={PROJECTS_URL} className="flex text-gray-500">
        <ArrowLongLeftIcon className="h-5 w-5 mr-2" />{' '}
        <p className="text-sm">Back to projects</p>
      </Link>
      <div className="flex flex-row justify-between mt-8">
        <div>
          <p className="font-bold text-base">Family Home</p>{' '}
          <p className="text-sm mt-2">
            Date Started: Wed, 20th May 2022 | Project ID: 0001
          </p>
        </div>
        <div>
          <Link
            href={DASH_URL}
            className="bg-traverse-yellow px-4 py-4 w-40 rounded text-center h-10 mt-2"
          >
            Continue project
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
