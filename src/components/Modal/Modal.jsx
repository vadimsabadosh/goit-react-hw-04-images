import React from 'react';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useCallback } from 'react';

export default function Modal({ closeModal, url }) {
  const ref = React.useRef();

  const handleClickOutside = useCallback(
    e => {
      if (!ref.current || !ref.current.contains(e.target)) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handlePressEscape = useCallback(
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keyup', handlePressEscape);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keyup', handlePressEscape);
    };
  }, [handleClickOutside, handlePressEscape]);

  return (
    <div className="overlay">
      <div className="modal" ref={ref}>
        <img src={url} alt="" />
      </div>
    </div>
  );
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
