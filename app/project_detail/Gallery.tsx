import { TGallery } from '../types/common';
import GalleryItem from './GalleryItem';

const Gallery = () => {
  const data: TGallery[] = [
    {
      id: '1',
      title: 'Clearance, Excavation and EarthWorks ',
      dateSubmitted: 'Wed, 25th July 2022',
      images: [
        { id: '1', path: 'https://via.placeholder.com/600x400' },
        { id: '2', path: 'https://via.placeholder.com/600x400' },
        { id: '3', path: 'https://via.placeholder.com/600x400' },
        { id: '4', path: 'https://via.placeholder.com/600x400' },
        { id: '5', path: 'https://via.placeholder.com/600x400' },
        { id: '6', path: 'https://via.placeholder.com/600x400' },
        { id: '7', path: 'https://via.placeholder.com/600x400' },
        { id: '8', path: 'https://via.placeholder.com/600x400' },
      ],
    },
    {
      id: '2',
      title: 'Foundations Footings',
      dateSubmitted: 'Wed, 25th July 2022',
      images: [
        { id: '1', path: 'https://via.placeholder.com/600x400' },
        { id: '2', path: 'https://via.placeholder.com/600x400' },
        { id: '3', path: 'https://via.placeholder.com/600x400' },
        { id: '4', path: 'https://via.placeholder.com/600x400' },
      ],
    },
  ];
  return (
    <>
      {data.map((gallery) => (
        <GalleryItem key={gallery.id} gallery={gallery} />
      ))}
    </>
  );
};

export default Gallery;
