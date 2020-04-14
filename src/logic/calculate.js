import Big from 'big-js';
import operate from './operate';

const calculate = (data, name) => {
    if(name === 'AC' || name === '.' || name === '=') {
        return {
            total = null,
            next = null,
            operation = null,
        };
    }
