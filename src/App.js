import React, { useState } from 'react';
import Button from './components/Button';
import ButtonClear from './components/ButtonClear';
import ButtonReverse from './components/ButtonReverse';
import ButtonPercent from './components/ButtonPercent';
import ButtonSave from './components/ButtonSave';

const App = () => {
  const [currentValue, setCurrentValue] = useState(0);
  const [savedNumber, setSavedNumber] = useState(0);

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
      setSavedNumber(currentValue);
    }
  };

  const getValueNumber = () => {
    if (savedNumber) {
      setCurrentValue(savedNumber);
    }
  };

  const getValueNumberAndRemove = () => {
    if (savedNumber) {
      setCurrentValue(savedNumber);
      setSavedNumber(0);
    }
  };

  const removeValueNumber = () => {
    if (savedNumber) {
      setSavedNumber(0);
    }
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
      <Button classname="btn btn_warning" label="/" />
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
        saveValueHandler={getValueNumberAndRemove}
      />
      <ButtonSave
        classname="btn btn_warning"
        saveValueHandler={saveValueHandler}
        label="m+"
      />
      <Button classname="btn" label="7" updateValue={setNumberHandler} />
      <Button classname="btn" label="8" updateValue={setNumberHandler} />
      <Button classname="btn" label="9" updateValue={setNumberHandler} />
      <Button classname="btn btn_warning" label="*" />
      <Button classname="btn" label="4" updateValue={setNumberHandler} />
      <Button classname="btn" label="5" updateValue={setNumberHandler} />
      <Button classname="btn" label="6" updateValue={setNumberHandler} />
      <Button classname="btn btn_warning" label="-" />
      <Button classname="btn" label="1" updateValue={setNumberHandler} />
      <Button classname="btn" label="2" updateValue={setNumberHandler} />
      <Button classname="btn" label="3" updateValue={setNumberHandler} />
      <Button classname="btn btn_warning" label="+" />
      <Button
        classname="btn btn_zero"
        label="0"
        updateValue={setNumberHandler}
      />
      <Button classname="btn" label="." updateValue={setNumberFloatHandler} />
      <Button classname="btn btn_warning" label="=" />
    </div>
  );
};

export default App;
