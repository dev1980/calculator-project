import React from 'react';
import PropTypes from 'prop-types';

const Display = props => {
  const { value } = props;

  return (
    <div className="display">
      <h3>{value}</h3>
    </div>
  );
};

Display.defaultProps = { value: PropTypes.string.isRequired };

export default Display;
