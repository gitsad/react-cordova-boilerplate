import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  text: PropTypes.string
};

export function AuthButton(props) {
  return(
    <div className="AuthButton">
      <button type="submit">
        {props.text}
      </button>
    </div>
  );
}

AuthButton.propTypes = propTypes;