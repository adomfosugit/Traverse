import axios from 'axios';
import { format } from 'date-fns';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import { TSafeBid } from '../../../../../types';
import TableNav from '../../TableNav';

interface ILandTableProps {
  bids?: TSafeBid[] | null;
}
const BidTable = ({ bids }: ILandTableProps) => {
  const router = useRouter();

  const handleAcceptBidClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    const bidId = event.currentTarget.getAttribute('data-id');
    try {
      await axios.post(`/api/bids/${bidId}`);

      router.refresh();
      toast.success('Bid accepted');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  const handleRejectBidClick = async (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.stopPropagation();
    const bidId = event.currentTarget.getAttribute('data-id');
    try {
      await axios.delete(`/api/bids/${bidId}`);

      router.refresh();
      toast.success('Bid rejected');
    } catch (error) {
      toast.error('Something went wrong');
    }
  };

  return (
    <div className="w-full mr-12">
      <div className="overflow-hidden shadow-md sm:rounded-lg mt-16">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50  ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Bidder
              </th>
              <th scope="col" className="px-6 py-3">
                Offer Amount
              </th>
              <th scope="col" className="px-6 py-3">
                Offered at
              </th>
              <th scope="col" className="px-6 py-3"></th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {bids?.map((bid) => (
              <tr
                key={bid?.user?.name}
                className="bg-white border-b hover:bg-gray-50"
              >
                <td className="px-6 py-4">{bid?.user?.name}</td>
                <td className="px-6 py-4">{bid?.offer}</td>
                <td className="px-6 py-4">
                  {format(new Date(bid?.createdAt), 'dd/LL/yyyy hh:mm a')}{' '}
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={handleAcceptBidClick}
                    data-id={bid.id}
                    className="font-medium w-24 h-8 rounded-full text-center p-1 bg-green-100 text-green-700 "
                  >
                    Accept bid
                  </button>
                </td>
                <td className="px-6 py-4">
                  <button
                    onClick={handleRejectBidClick}
                    data-id={bid.id}
                    className="font-medium w-24 h-8 rounded-full text-center p-1 bg-red-100 text-red-700 "
                  >
                    Reject bid
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <TableNav />
      </div>
    </div>
  );
};

export default BidTable;
