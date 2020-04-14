import operate from './operate';

const calculate = (data, name) => {
  let result;
  const { total, next, operation } = data;
  switch (name) {
    case '+/-':
      result = total * (-1);
      break;
    case '.':
      result = '.';
      break;
    case 'AC':
      result = ' ';
      break;
    case '=':
      result = operate(total, next, operation);
      break;
    default:
  }

  return result;
};

export default calculate;
