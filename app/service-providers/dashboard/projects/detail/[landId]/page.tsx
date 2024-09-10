import getCurrentUser from '../../../../../actions/getCurrentUser';
import getLandById from '../../../../../actions/getLandById';
import EmptyState from '../../../../../components/EmptyState';
import Detail from './Detail';

interface IServiceLandDetailPageParams {
  landId?: string;
}
const ServiceLandDetailPage = async ({
  params,
}: {
  params: IServiceLandDetailPageParams;
}) => {
  const land = await getLandById(params);
  const currentUser = await getCurrentUser();

  if (!land) {
    return <EmptyState />;
  }
  return (
    <div className="w-full min-h-screen">
      <Detail land={land} currentUser={currentUser} />
    </div>
  );
};

export default ServiceLandDetailPage;
