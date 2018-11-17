import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const NextArrow = (props) => {
  return (
    <button title="Go to next image" className="arrow-next arrow" onClick={props.goToNextSlide}>
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
}

export default NextArrow;
