import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const PreviousArrow = (props) => {
  return (
    <button title="Go to previous image" className="arrow-previous arrow" onClick={props.goToPrevSlide}>
      <FontAwesomeIcon icon={faArrowLeft} />
    </button>
  );
}

export default PreviousArrow;