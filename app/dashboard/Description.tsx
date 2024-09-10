import { LONG_DESCRIPTION } from '../../config/constants';
import { TLand } from './land-purchase/LandSelection';
import LandDescriptionCard from './LandDescriptionCard';

const land: TLand = {
  id: '1',
  location: 'Afienya',
  imagePath: 'https://via.placeholder.com/600x400',
  region: 'Greater Accra Region',
  dimension: 2,
  dimensionUnit: 'acres',
  description: LONG_DESCRIPTION,
  price: 130000,
  currency: 'GHS',
};
const Description = () => {
  return (
    <div className="flex h-60">
      <LandDescriptionCard land={land} />
    </div>
  );
};

export default Description;
