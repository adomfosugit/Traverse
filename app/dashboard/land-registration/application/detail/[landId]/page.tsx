import getLandById from '../../../../../actions/getLandById';
import Application from './Application';

interface IApplicationPageParams {
  landId?: string;
}
const ApplicationPage = async ({
  params,
}: {
  params: IApplicationPageParams;
}) => {
  const land = await getLandById(params);
  return <Application land={land} />;
};

export default ApplicationPage;
