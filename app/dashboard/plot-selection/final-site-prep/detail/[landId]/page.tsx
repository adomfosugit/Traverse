import getLandById from '../../../../../actions/getLandById';
import FinalSitePrep from './FinalSitePrep';

interface IFinalSitePrepPageParams {
  landId?: string;
}
const FinalSitePrepPage = async ({
  params,
}: {
  params: IFinalSitePrepPageParams;
}) => {
  const land = await getLandById(params);
  return <FinalSitePrep land={land} />;
};

export default FinalSitePrepPage;
