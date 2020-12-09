import React from 'react';

const Button = ({ classname, label, doCalc }) => {
  return (
    <button className={classname} onClick={() => doCalc(label)}>
      {label}
    </button>
  );
};

export default Button;
