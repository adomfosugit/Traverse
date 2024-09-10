import { EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { DASH_URL } from '../../config/constants';

type TRecent = {
  date: string;
  description: string;
};

const data: TRecent[] = [
  {
    date: 'Sun, 1st Aug 2022 16:45 PM',
    description: 'Submission of counter offer for land',
  },
  {
    date: 'Fri, 30th July 2022 10:45 PM',
    description: 'Payment for Pre-Purchase Stage',
  },
  {
    date: 'Fri, 30th July 2022 16:45 PM',
    description: 'Site Visit Report Submitted',
  },
];

const Recent = () => {
  return (
    <div>
      <div className="font-bold text-gray-500 text-sm">Recent Activities</div>
      <div>
        {data.map((item) => (
          <div key={item.date}>
            <ul className="bg-gray-100 my-3 text-sm">
              <li className="p-1">
                <div className="w-full flex items-center justify-between space-x-4">
                  <div className="flex-shrink-0">
                    <p className="w-72 h-8 rounded-full">{item.date}</p>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm truncate">{item.description}</p>
                  </div>
                  <Link
                    href={DASH_URL}
                    className="inline-flex items-center hover:underline hover:text-traverse-yellow text-blue-600"
                  >
                    <EyeIcon className="w-3 h-3" />{' '}
                    <p className="mx-3">View details</p>
                  </Link>
                </div>
              </li>
            </ul>{' '}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recent;
