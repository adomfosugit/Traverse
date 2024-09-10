import getLandById from '../../../../../actions/getLandById';
import SaleAgreement from './SaleAgreement';

interface ISaleAgreementPageParams {
  landId?: string;
}
const SaleAgreementPage = async ({
  params,
}: {
  params: ISaleAgreementPageParams;
}) => {
  const land = await getLandById(params);
  return <SaleAgreement land={land} />;
};

export default SaleAgreementPage;
