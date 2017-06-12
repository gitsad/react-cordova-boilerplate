/**
 * Created by gitsad on 12.06.17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import DevTools from './DevTools';

const propTypes = {
  children: PropTypes.object // eslint-disable
};

export default class App extends React.Component {
  render() {
    return(
      <div>
        {__DEVTOOLS__ && <DevTools />}
        {this.props.children}
      </div>
    );
  };
}

App.propTypes = propTypes;