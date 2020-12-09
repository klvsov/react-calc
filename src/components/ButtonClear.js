import React from 'react';

const ButtonClear = ({ classname, label, clearValue }) => {
  return (
    <button className={classname} onClick={clearValue}>
      {label}
    </button>
  );
};

export default ButtonClear;
