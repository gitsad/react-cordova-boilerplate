import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string
};

export function FormHeader(props) {
  return(
    <div className="FormHeader">
      <h1>{props.text}</h1>
    </div>
  );
}

FormHeader.propTypes = propTypes;