import React from 'react';

const Button = ({ classname, label, getPercentHandler }) => {
  return (
    <button className={classname} onClick={getPercentHandler}>
      {label}
    </button>
  );
};

export default Button;
