import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'components/Modal';
import { useState } from 'react';

export default function ImageGalleryItem({ webformatURL, largeImageURL }) {
  const [isOpen, setIsOpen] = useState(false);

  function onOpenModal() {
    setIsOpen(true);
  }
  function onCloseModal() {
    setIsOpen(false);
  }

  return (
    <>
      <li className="gallery-item">
        <img src={webformatURL} alt="" onClick={onOpenModal} />
      </li>
      {isOpen && <Modal url={largeImageURL} closeModal={onCloseModal} />}
    </>
  );
}
ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
};
