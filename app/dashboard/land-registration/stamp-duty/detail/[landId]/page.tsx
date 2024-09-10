import getLandById from '../../../../../actions/getLandById';
import StampDuty from './StampDuty';

interface IStampDutyPageParams {
  landId?: string;
}
const StampDutyPage = async ({ params }: { params: IStampDutyPageParams }) => {
  const land = await getLandById(params);
  return <StampDuty land={land} />;
};

export default StampDutyPage;
