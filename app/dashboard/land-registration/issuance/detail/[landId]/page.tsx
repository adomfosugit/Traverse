import getLandById from '../../../../../actions/getLandById';
import Issuance from './Issuance';

interface IIssuancePageParams {
  landId?: string;
}
const IssuancePage = async ({ params }: { params: IIssuancePageParams }) => {
  const land = await getLandById(params);
  return <Issuance land={land} />;
};

export default IssuancePage;
