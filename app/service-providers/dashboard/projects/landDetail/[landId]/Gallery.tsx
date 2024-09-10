import Image from 'next/image';
import { TSafeLand, TSafeUser } from '../../../../../types';

interface IGalleryProps {
  land: TSafeLand & {
    user: TSafeUser;
  };
  currentUser?: TSafeUser | null;
}
const Gallery = ({ land }: IGalleryProps) => {
  console.log(land);
  return (
    <>
      <div className="flex flex-row overflow-x-auto mt-16 mb-5">
        {land.imageSrc.map((image, index) => (
          <Image
            src={image}
            key={index}
            width={201}
            height={201}
            alt={`Image ${index}`}
            className="mr-4 rounded-lg"
          />
        ))}
      </div>
    </>
  );
};

export default Gallery;
