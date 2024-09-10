import { EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ENegotiationStatus } from '../types/common';

type TNegotiations = {
  id: string;
  dateSubmitted: string;
  landLocation: string;
  currency: string;
  amount: string;
  counterOffer: string;
  status: string;
};
const Negotiations = () => {
  const data: TNegotiations[] = [
    {
      id: '1',
      dateSubmitted: 'Wed, 11th July 2022',
      landLocation: 'East Ridge',
      counterOffer: '200000.00',
      amount: '300000.00',
      status: 'Review',
      currency: 'GHS',
    },
    {
      id: '2',
      dateSubmitted: 'Wed, 14th July 2022',
      landLocation: 'Circle',
      counterOffer: '450000.00',
      amount: '500000',
      status: 'Accepted',
      currency: 'GHS',
    },
  ];

  return (
    <div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className=" text-gray-500 bg-gray-100 ">
            <tr>
              <th scope="col" className="px-3 py-3">
                Date submitted
              </th>
              <th scope="col" className="px-3 py-3">
                Land location
              </th>
              <th scope="col" className="px-3 py-3">
                Original amount
              </th>
              <th scope="col" className="px-3 py-3">
                Counter offer
              </th>
              <th scope="col" className="px-3 py-3">
                Status
              </th>
              <th scope="col" className="px-3 py-3">
                {''}
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((transaction) => (
              <tr
                key={transaction.id}
                className="bg-white border-b hover:bg-gray-50"
              >
                <th
                  scope="row"
                  className="px-3 py-4 text-gray-900 whitespace-nowrap "
                >
                  {transaction.dateSubmitted}
                </th>
                <td className="px-3 py-4">{transaction.landLocation}</td>
                <td className="px-3 py-4">{transaction.amount}</td>
                <td className="px-3 py-4 text-gray-400">
                  {transaction.currency} {transaction.counterOffer}
                </td>
                <td className="px-3 py-4">
                  <p
                    className={`rounded-full p-2 text-center ${
                      transaction.status === ENegotiationStatus.REVIEW
                        ? 'bg-gray-200'
                        : 'bg-green-200'
                    }`}
                  >
                    {transaction.status}
                  </p>
                </td>
                <td className="px-3 py-4 text-end">
                  <Link
                    href="#"
                    className="inline-flex items-center hover:underline hover:text-traverse-yellow text-blue-600"
                  >
                    <EyeIcon className="w-3 h-3" />{' '}
                    <p className="mx-3">View details</p>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Negotiations;
