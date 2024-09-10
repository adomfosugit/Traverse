import getLandById from '../../../../../actions/getLandById';
import SitePrep from './SitePrep';

interface ISitePrepPageParams {
  landId?: string;
}
const SitePrepPage = async ({ params }: { params: ISitePrepPageParams }) => {
  const land = await getLandById(params);
  return <SitePrep land={land} />;
};

export default SitePrepPage;
