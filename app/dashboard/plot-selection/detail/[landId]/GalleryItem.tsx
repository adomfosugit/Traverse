import Image from 'next/image';
import { TGallery } from '../../../../types/common';

interface IGalleryItemProp {
  gallery: TGallery;
}
const GalleryItem = ({ gallery }: IGalleryItemProp) => {
  return (
    <div className="mt-16 mb-5 w-">
      <div className="flex flex-row overflow-x-auto mt-8">
        {gallery.images.map((image) => (
          <Image
            key={image.id}
            src={image.path}
            width={201}
            height={165}
            alt={gallery.title}
            className="mx-4 rounded-lg"
          />
        ))}
      </div>
    </div>
  );
};

export default GalleryItem;
