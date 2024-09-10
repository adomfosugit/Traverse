import getLands from '../../actions/getLands';
import LandSelection from './LandSelection';

const page = async () => {
  const lands = await getLands();
  return <LandSelection lands={lands} />;
};

export default page;
