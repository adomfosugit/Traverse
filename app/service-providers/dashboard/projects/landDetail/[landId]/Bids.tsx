import EmptyState from '../../../../../components/EmptyState';
import { TSafeBid } from '../../../../../types';
import BidTable from './BidTable';

interface IBidsProps {
  bids: TSafeBid[];
}

const Bids = ({ bids }: IBidsProps) => {
  if (!bids || bids?.length < 1) {
    return (
      <EmptyState
        title="No documents found"
        subtitle="Documents will show here once uploaded"
      />
    );
  }
  return (
    <div className="h-auto w-full m-8">
      <p className="font-semibold mb-4">Current bids</p>
      <div className="flex flex-wrap">
        <BidTable bids={bids} />
      </div>
    </div>
  );
};

export default Bids;
