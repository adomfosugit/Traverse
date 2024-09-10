import getLandById from '../../../../../actions/getLandById';
import Payment from './Payment';

interface IFeePaymentPageParams {
  landId?: string;
}
const FeePaymentPage = async ({
  params,
}: {
  params: IFeePaymentPageParams;
}) => {
  const land = await getLandById(params);
  return <Payment land={land} />;
};

export default FeePaymentPage;
