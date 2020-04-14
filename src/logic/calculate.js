import operate from './operate';

const calculate = (data, name) => {
    if(name === 'AC') {
        return {
            total = null,
            next = null,
            operation = null,
        };
    }
    let result;
    const { total, next, operation } = data;
    switch (name) {
        case '+/-':
          result = total * (-1);
          break;
        case '.':
          result = '.';
          break;
        case '=':
          result = operate(total, next, operation);
          break;
        default:
      }
    
      return result;
    };

    export default calculate;
