/* eslint-disable import/extensions */
import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  let x;
  let y;

  if (numberOne) {
    x = Big(numberOne);
  }
  if (numberTwo) {
    y = Big(numberTwo);
  }

  if (operation === '-') {
    return x.minus(y).toString();
  }

  if (operation === '+') {
    return x.plus(y).toString();
  }

  if (operation === 'x') {
    return x.mul(y).toString();
  }

  if (operation === '÷' && numberTwo === '0') {
    return 'NaN';
  }

  if (operation === '%') {
    if (numberOne) {
      return x.mul(0.01).toString();
    }
    if (numberTwo) {
      return y.mul(0.01).toString();
    }
  }
  return x.div(y).toString();
};
export default operate;
