import React from 'react';
import PropTypes from 'prop-types';

const Display = prop => {
  const { value } = prop;

  return (
    <div className="display">
      <h3>{value}</h3>
    </div>
  );
};

Display.defaultProps = { value: '0' };
Display.propTypes = { value: PropTypes.string };

export default Display;
