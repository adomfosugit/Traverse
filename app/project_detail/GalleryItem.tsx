import Image from 'next/image';
import { TGallery } from '../types/common';

interface IGalleryItemProp {
  gallery: TGallery;
}
const GalleryItem = ({ gallery }: IGalleryItemProp) => {
  return (
    <div className="p-10 mb-5 bg-gray-50 w-">
      <p className="font-semibold text-gray-600">{gallery.title}</p>
      <p className="text-xs text-gray-500 mt-2">{gallery.dateSubmitted}</p>
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
