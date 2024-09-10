import getLandById from '../../../../../actions/getLandById';
import Survey from './Survey';

interface ISurveyPageParams {
  landId?: string;
}
const SurveyPage = async ({ params }: { params: ISurveyPageParams }) => {
  const land = await getLandById(params);
  return <Survey land={land} />;
};

export default SurveyPage;
