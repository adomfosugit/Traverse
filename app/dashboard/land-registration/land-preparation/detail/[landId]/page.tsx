import getLandById from '../../../../../actions/getLandById';
import LandPreparation from './LandPreparation';

interface ILandPreparationPageParams {
  landId?: string;
}
const LandPreparationPage = async ({
  params,
}: {
  params: ILandPreparationPageParams;
}) => {
  const land = await getLandById(params);
  return <LandPreparation land={land} />;
};

export default LandPreparationPage;
