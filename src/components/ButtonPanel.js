import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = ({clickHandler}) => {
  const handleClick = buttonName => {
    clickHandler(buttonName);
  };
  return (
    <div className="buttonPanel">
      <div className="first-group">
        <Button name="AC" color="#eee" clickHandler={handleClick} />
        <Button name="+/-" color="#eee" clickHandler={handleClick} />
        <Button name="%" color="#eee" clickHandler={handleClick} />
        <Button name="÷" clickHandler={handleClick} />
      </div>
      <div className="second-group">
        <Button name="7" color="#eee" clickHandler={handleClick} />
        <Button name="8" color="#eee" clickHandler={handleClick} />
        <Button name="9" color="#eee" clickHandler={handleClick} />
        <Button name="x" clickHandler={handleClick} />
      </div>
      <div className="third-group">
        <Button name="4" color="#eee" clickHandler={handleClick} />
        <Button name="5" color="#eee" clickHandler={handleClick} />
        <Button name="6" color="#eee" clickHandler={handleClick} />
        <Button name="-" clickHandler={handleClick} />
      </div>
      <div className="fourth-group">
        <Button name="1" color="#eee" clickHandler={handleClick} />
        <Button name="2" color="#eee" clickHandler={handleClick} />
        <Button name="3" color="#eee" clickHandler={handleClick} />
        <Button name="+" clickHandler={handleClick} />
      </div>
      <div className="fifth-group">
        <Button name="0" wide color="#eee" clickHandler={handleClick} />
        <Button name="." color="#eee" clickHandler={handleClick} />
        <Button name="=" clickHandler={handleClick} />
      </div>
    </div>
  );
};

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
