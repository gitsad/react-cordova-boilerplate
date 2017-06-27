import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    text: PropTypes.string
};

export function Button(props) {
    return(
        <div className="Button">
            <button
                {...props}
            >
                {props.text}
            </button>
        </div>
    );
}

Button.propTypes = propTypes;