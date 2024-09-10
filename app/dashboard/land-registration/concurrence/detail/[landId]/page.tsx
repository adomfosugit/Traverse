import getLandById from '../../../../../actions/getLandById';
import Concurrence from './Concurrence';

interface IConcurrencePageParams {
  landId?: string;
}
const ConcurrencePage = async ({
  params,
}: {
  params: IConcurrencePageParams;
}) => {
  const land = await getLandById(params);
  return <Concurrence land={land} />;
};

export default ConcurrencePage;
