import getLandById from '../../../../../actions/getLandById';
import Conveyance from './Conveyance';

interface IConveyancePageParams {
  landId?: string;
}
const ConveyancePage = async ({
  params,
}: {
  params: IConveyancePageParams;
}) => {
  const land = await getLandById(params);
  return <Conveyance land={land} />;
};

export default ConveyancePage;
