import React from 'react';

const Button = ({ classname, label, doCalc, operation }) => {
  return (
    <button className={classname} onClick={() => doCalc(operation)}>
      {label}
    </button>
  );
};

export default Button;
