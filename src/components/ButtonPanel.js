import React from 'react';
import Button from './Button';

const ButtonPanel = () => (
  <div className="ButtonPanel">
    <div className="first-group">
      <Button name="AC" color="#eee" />
      <Button name="+/-" color="#eee" />
      <Button name="%" color="#eee" />
      <Button name="÷" />
    </div>
    <div className="second-group">
      <Button name="7" color="#eee" />
      <Button name="8" color="#eee" />
      <Button name="9" color="#eee" />
      <Button name="x" />
    </div>
    <div className="third-group">
      <Button name="4" color="#eee" />
      <Button name="5" color="#eee" />
      <Button name="6" color="#eee" />
      <Button name="-" />
    </div>
    <div className="fourth-group">
      <Button name="1" color="#eee" />
      <Button name="2" color="#eee" />
      <Button name="3" color="#eee" />
      <Button name="+" />
    </div>
    <div className="fifth-group">
      <Button name="0" wide color="#eee" />
      <Button name="." color="#eee" />
      <Button name="=" />
    </div>
  </div>
);

export default ButtonPanel;
