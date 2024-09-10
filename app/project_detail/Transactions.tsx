import { EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

type TTransactions = {
  id: string;
  datePaid: string;
  paidFor: string;
  paymentDetails: string;
  amount: string;
  currency: string;
};
const Transactions = () => {
  const data: TTransactions[] = [
    {
      id: '1',
      datePaid: 'Wed, 11th July 2022',
      paidFor: 'Pre-purchase Stage',
      paymentDetails: 'Visa/Debit Card',
      amount: '3450.00',
      currency: 'GHS',
    },
    {
      id: '2',
      datePaid: 'Wed, 15th July 2022',
      paidFor: 'Building Permit Application Fee',
      paymentDetails: 'Visa/Debit Card',
      amount: '3450.00',
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
                Date paid
              </th>
              <th scope="col" className="px-3 py-3">
                Paid for
              </th>
              <th scope="col" className="px-3 py-3">
                Payment details
              </th>
              <th scope="col" className="px-3 py-3">
                Amount
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
                className="bg-white border-b hover:bg-gray-50 "
              >
                <th
                  scope="row"
                  className="px-3 py-4 text-gray-900 whitespace-nowrap "
                >
                  {transaction.datePaid}
                </th>
                <td className="px-3 py-4">{transaction.paidFor}</td>
                <td className="px-3 py-4">{transaction.paymentDetails}</td>
                <td className="px-3 py-4 text-gray-400">
                  {transaction.currency} {transaction.amount}
                </td>
                <td className="px-3 py-4 text-end">
                  <Link
                    href="#"
                    className="inline-flex items-center hover:underline hover:text-traverse-yellow text-blue-600"
                  >
                    <EyeIcon className="w-3 h-3" />{' '}
                    <p className="mx-3">View receipt</p>
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

export default Transactions;
