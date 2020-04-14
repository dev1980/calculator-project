import React from 'react';
import PropTypes from 'prop-types';

const Button = props => {
  const { name, color, wide } = props;
  const style = {backgroundColor: color};
  if(wide) style.width ='50%';

  return (
    <button className="button" type="button" style={style}>{name}</button>
  );
};

Button.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
  wide: PropTypes.bool,
};
Button.defaultProps = {
  color: 'orange',
  wide: false,
}

export default Button;
