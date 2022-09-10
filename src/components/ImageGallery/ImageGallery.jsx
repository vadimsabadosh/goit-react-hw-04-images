import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from 'components/ImageGalleryItem';

export default function ImageGallery({ gallery }) {
  return (
    <ul className="gallery">
      {gallery.map(item => (
        <ImageGalleryItem
          webformatURL={item.webformatURL}
          largeImageURL={item.largeImageURL}
          key={item.id}
        />
      ))}
    </ul>
  );
}
ImageGallery.propTypes = {
  gallery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
    })
  ),
};
