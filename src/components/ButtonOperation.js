import React from 'react';

const Button = ({ classname, label, getOperationHandler }) => {
  return (
    <button className={classname} onClick={() => getOperationHandler(label)}>
      {label}
    </button>
  );
};

export default Button;
