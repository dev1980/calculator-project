import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, color, wide, clickHandler,
}) => {
  const style = { backgroundColor: color };
  if (wide) style.width = '50%';

  const handleClick = buttonName => { clickHandler(buttonName); };

  return (
    <button className="button" type="button" style={style} onClick={() => handleClick(name)}>
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
  clickHandler: PropTypes.func.isRequired,
};

Button.defaultProps = {
  color: 'orange',
  wide: false,
};

export default Button;
