import React, { useState } from 'react';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import ButtonReverse from './components/ButtonReverse';
import ButtonPercent from './components/ButtonPercent';
import ButtonSave from './components/ButtonSave';
import ButtonOperation from './components/ButtonOperation';
import ButtonCalc from './components/ButtonCalc';

const App = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [savedNumber, setSavedNumber] = useState(0);
  const [currentOperation, setCurrentOperation] = useState('');
  const [nextValue, setNextValue] = useState(null);

  const setNumberHandler = (n) => {
    if (!currentValue) {
      setCurrentValue(n);
    } else {
      setCurrentValue((currentValue) => {
        return currentValue + n;
      });
    }
  };

  const setNumberFloatHandler = (comma) => {
    if (currentValue && !currentValue.toString().includes('.')) {
      setCurrentValue((currentValue) => {
        return currentValue + comma;
      });
    }
  };

  const clearResultHandler = () => {
    setCurrentValue(0);
  };

  const reverseNumberHandler = () => {
    if (currentValue) {
      setCurrentValue((currentValue) => {
        return parseFloat(currentValue) * -1;
      });
    }
  };

  const getPercentHandler = () => {
    if (currentValue) {
      setCurrentValue((currentValue) => {
        return currentValue / 100;
      });
    }
  };

  const saveValueHandler = () => {
    if (currentValue) {
      if (savedNumber) {
        setSavedNumber((savedNumber) => {
          return +savedNumber + +currentValue;
        });
      } else {
        setSavedNumber(currentValue);
      }
      setCurrentValue(0);
    }
  };

  const getValueNumber = () => {
    if (savedNumber) {
      setCurrentValue(savedNumber);
    }
  };

  const getValueNumberSub = () => {
    if (savedNumber) {
      setSavedNumber((savedNumber) => {
        return +savedNumber - +currentValue;
      });
    }
    setCurrentValue(0);
  };

  const removeValueNumber = () => {
    if (savedNumber) {
      setSavedNumber(0);
    }
  };

  const getOperationHandler = (op) => {
    setCurrentValue(0);
    setCurrentOperation(op);
    if (currentOperation) {
      setNextValue(currentValue);
    }
  };

  const doCalc = (op) => {
    setCurrentValue((currentValue) => {
      switch (op) {
        case '+':
          return +currentValue + +nextValue;
        case '-':
          return +nextValue - +currentValue;
        case '*':
          return +currentValue * +nextValue;
        case '/':
          return +nextValue / +currentValue;
        default:
          return NaN;
      }
    });
    setNextValue(null);
  };

  return (
    <div className="calc">
      <p className="result">{currentValue}</p>
      <ButtonClear
        classname="btn btn_secondary"
        label="AC"
        clearValue={clearResultHandler}
      />
      <ButtonReverse
        classname="btn btn_secondary"
        label="+/-"
        reverseNumberHandler={reverseNumberHandler}
      />
      <ButtonPercent
        classname="btn btn_secondary"
        label="%"
        getPercentHandler={getPercentHandler}
      />
      <ButtonOperation
        classname="btn btn_warning"
        label="/"
        getOperationHandler={getOperationHandler}
      />
      <ButtonSave
        classname="btn"
        label="mc"
        saveValueHandler={removeValueNumber}
      />
      <ButtonSave
        classname="btn"
        label="mr"
        saveValueHandler={getValueNumber}
      />
      <ButtonSave
        classname="btn"
        label="m-"
        saveValueHandler={getValueNumberSub}
      />
      <ButtonSave
        classname="btn btn_warning"
        saveValueHandler={saveValueHandler}
        label="m+"
      />
      <Button classname="btn" label="7" updateValue={setNumberHandler} />
      <Button classname="btn" label="8" updateValue={setNumberHandler} />
      <Button classname="btn" label="9" updateValue={setNumberHandler} />
      <ButtonOperation
        classname="btn btn_warning"
        label="*"
        getOperationHandler={getOperationHandler}
      />
      <Button classname="btn" label="4" updateValue={setNumberHandler} />
      <Button classname="btn" label="5" updateValue={setNumberHandler} />
      <Button classname="btn" label="6" updateValue={setNumberHandler} />
      <ButtonOperation
        classname="btn btn_warning"
        label="-"
        getOperationHandler={getOperationHandler}
      />
      <Button classname="btn" label="1" updateValue={setNumberHandler} />
      <Button classname="btn" label="2" updateValue={setNumberHandler} />
      <Button classname="btn" label="3" updateValue={setNumberHandler} />
      <ButtonOperation
        classname="btn btn_warning"
        label="+"
        getOperationHandler={getOperationHandler}
      />
      <Button
        classname="btn btn_zero"
        label="0"
        updateValue={setNumberHandler}
      />
      <Button classname="btn" label="." updateValue={setNumberFloatHandler} />
      <ButtonCalc
        classname="btn btn_warning"
        operation={currentOperation}
        label="="
        doCalc={doCalc}
      />
    </div>
  );
};

export default App;
