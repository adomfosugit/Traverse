import getLandById from '../../../../../actions/getLandById';
import DiligenceReport from './DiligenceReport';

interface IDiligenceReportPageParams {
  landId?: string;
}
const DiligenceReportPage = async ({
  params,
}: {
  params: IDiligenceReportPageParams;
}) => {
  const land = await getLandById(params);
  return <DiligenceReport land={land} />;
};

export default DiligenceReportPage;
