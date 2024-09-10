import getCurrentUser from '../../../../../actions/getCurrentUser';
import getLandById from '../../../../../actions/getLandById';
import EmptyState from '../../../../../components/EmptyState';
import Detail from './Detail';

interface IPlotSelectionDetailParams {
  landId?: string;
}
const PlotSelectionDetailPage = async ({
  params,
}: {
  params: IPlotSelectionDetailParams;
}) => {
  const land = await getLandById(params);
  const currentUser = await getCurrentUser();

  if (!land) {
    return <EmptyState />;
  }
  return <Detail land={land} currentUser={currentUser} />;
};

export default PlotSelectionDetailPage;
