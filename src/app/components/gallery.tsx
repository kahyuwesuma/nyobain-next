import React from 'react';
import Gallery from 'react-image-gallery';

const images = [
  {
    original: 'https://example.com/image1.jpg',
    thumbnail: 'https://example.com/thumb1.jpg',
    description: 'Deskripsi Gambar 1',
  },
  {
    original: 'https://example.com/image2.jpg',
    thumbnail: 'https://example.com/thumb2.jpg',
    description: 'Deskripsi Gambar 2',
  },
];

const MyGallery: React.FC = () => {
  return (
    <div>
      <h1>Galeri Gambar</h1>
      <Gallery items={images} />
    </div>
  );
};

export default MyGallery;
