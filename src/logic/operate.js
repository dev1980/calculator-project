import Big from 'big-js';

const operate = (numberOne, numberTwo, operation) => {
  let result = new Big(0);
  const x = new Big(numberOne);
  const y = new Big(numberTwo);
  switch (operation) {
    case '+':
      result = x.plus(y);
      break;
    case '-':
      result = x.minus(y);
      break;
    case '*':
      result = x.times(y);
      break;
    case '/':
      if (y === 0) {
        return 'Math Error';
      }
      result = x.div(y);
      break;
    case '%':
      result = numberOne % numberTwo;
      break;
    default:
      break;
  }
  return String(result);
};

export default operate;
