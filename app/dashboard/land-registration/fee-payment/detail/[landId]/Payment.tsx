import { DASH_STAMP_DUTY } from '../../../../../../config/constants';
import { TSafeLandElement } from '../../../../../types';
import Header from '../../../../overview/Header';
import DescriptionMain from '../../../../plot-selection/DescriptionMain';
import BillingDetails from './BillingDetails';
import OrderDetails from './OrderDetails';

interface IPaymentProps {
  land: TSafeLandElement | null;
}
const Payment = ({ land }: IPaymentProps) => {
  const subText =
    'Fees paid to the Government to register your land transaction';
  return (
    <div className="">
      <div className="mx-10">
        <Header
          backText="Back"
          title="Pay Land Registration Stage Fees"
          subText={subText}
          buttonText="Continue"
          linkPath={`${DASH_STAMP_DUTY}/${land?.id}`}
        />
        <DescriptionMain land={land} />
        <div className="grid grid-cols-2 gap-4 mt-10">
          <div className="">
            <BillingDetails />
          </div>
          <div className="">
            <OrderDetails />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
