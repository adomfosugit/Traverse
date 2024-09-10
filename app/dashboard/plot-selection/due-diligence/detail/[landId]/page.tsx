import getLandById from '../../../../../actions/getLandById';
import DueDiligence from './DueDiligence';

interface IDueDiligencePageParams {
  landId?: string;
}
const DueDiligencePage = async ({
  params,
}: {
  params: IDueDiligencePageParams;
}) => {
  const land = await getLandById(params);
  return <DueDiligence land={land} />;
};

export default DueDiligencePage;
