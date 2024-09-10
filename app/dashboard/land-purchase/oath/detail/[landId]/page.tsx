import getLandById from '../../../../../actions/getLandById';
import Oath from './Oath';

interface IOathPageParams {
  landId?: string;
}
const OathPage = async ({ params }: { params: IOathPageParams }) => {
  const land = await getLandById(params);
  return <Oath land={land} />;
};

export default OathPage;
