import Link from 'next/link';
import { BiSearch } from 'react-icons/bi';
import { PROJECTS_URL } from '../../../config/constants';

const locationLabel = 'Location';
const durationLabel = 'Duration';
const guestLabel = 'Guest';

const MidSection = () => {
  return (
    <div
      onClick={() => {}}
      className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
      "
    >
      <div
        className="
          flex 
          flex-row 
          items-center 
          justify-between
        "
      >
        <Link
          href={PROJECTS_URL}
          className="
            text-sm 
            font-semibold 
            px-6
          "
        >
          {locationLabel}
        </Link>
        <div
          className="
            hidden 
            sm:block 
            text-sm 
            font-semibold 
            px-6 
            border-x-[1px] 
            flex-1 
            text-center
          "
        >
          {durationLabel}
        </div>
        <div
          className="
            text-sm 
            pl-6 
            pr-2 
            text-gray-600 
            flex 
            flex-row 
            items-center 
            gap-3
          "
        >
          <div className="hidden sm:block">{guestLabel}</div>
          <div
            className="
              p-2 
              bg-rose-500 
              rounded-full 
              text-white
            "
          >
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MidSection;
