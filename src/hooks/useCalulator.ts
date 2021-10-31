import {useState} from 'react';

const useCalulator = () => {
  const [firstValue, setFirstValue] = useState('0');
  const [secondValue, setSecondValue] = useState('0');
  const [operation, setOperation] = useState<string | null>(null);

  const numberBuilder = (newValue: string) => {
    if (firstValue === '0' && newValue !== '.') setFirstValue(newValue);
    else if (!isSecondPoint(firstValue, newValue))
      setFirstValue(firstValue + newValue);
  };

  const backSpace = () => {
    if(firstValue.length>1)
    setFirstValue(firstValue.slice(0, -1))
    else setFirstValue('0')
  }

  const isSecondPoint = (currentValue: string, newValue: string) => {
    if (newValue === '.' && currentValue.includes('.')) return true;
    return false;
  };

  const clear = () => {
    if (operation === '=') {
      setFirstValue('0');
      setOperation(null);
    } else if (firstValue !== '0') setFirstValue('0');
    else if (secondValue !== '0') {
      setSecondValue('0');
      setOperation(null);
    }
  };

  const invertPlusMinues = () => {
    if (firstValue !== '0')
      if (firstValue.includes('-')) setFirstValue(firstValue.slice(1));
      else setFirstValue('-'.concat(firstValue));
  };

  const operate = (simbol: string) => {
    setSecondValue(firstValue);
    setOperation(simbol);
    setFirstValue('0');
  };

  const finishCalc = (res: number) => {
    setFirstValue(res.toString());
    setSecondValue('0');
    setOperation('=');
  };

  const calculateResult = () => {
    let res: number;
    switch (operation) {
      case '+':
        res = parseFloat(secondValue) + parseFloat(firstValue);
        finishCalc(res);
        break;
      case '-':
        res = parseFloat(secondValue) - parseFloat(firstValue);
        finishCalc(res);
        break;
      case 'X':
        res = parseFloat(secondValue) * parseFloat(firstValue);
        finishCalc(res);
        break;
      case '÷':
        res = parseFloat(secondValue) / parseFloat(firstValue);
        finishCalc(res);
        break;
    }
  };

  return {
    firstValue,
    secondValue,
    operation,
    clear,
    backSpace,
    invertPlusMinues,
    operate,
    numberBuilder,
    calculateResult,
  };
};

export default useCalulator;
