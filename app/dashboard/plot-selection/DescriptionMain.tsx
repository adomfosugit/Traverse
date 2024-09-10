import { TSafeLandElement } from '../../types';
import LandDescriptionCardMain from './LandDescriptionCardMain';

interface ISitePrepProps {
  land: TSafeLandElement | null;
}

const DescriptionMain = ({ land }: ISitePrepProps) => {
  return (
    <div className="flex h-60">
      <LandDescriptionCardMain land={land} />
    </div>
  );
};

export default DescriptionMain;
