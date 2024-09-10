import getLandById from '../../../../../actions/getLandById';
import Payment from './Payment';

interface IPaymentPageParams {
  landId?: string;
}
const PaymentPage = async ({ params }: { params: IPaymentPageParams }) => {
  const land = await getLandById(params);
  return <Payment land={land} />;
};

export default PaymentPage;
