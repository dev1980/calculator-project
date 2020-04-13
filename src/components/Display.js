import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  let { value } = props;
  value = value || '0';
  return (
    <div className="display">
      <h3>{value}</h3>
    </div>
  );
};

Display.defaultProps = { value: '0' };
Display.propTypes = { value: PropTypes.string };

export default Display;
