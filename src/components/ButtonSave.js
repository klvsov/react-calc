import React from 'react';

const Button = ({ classname, label, saveValueHandler }) => {
  return (
    <button className={classname} onClick={saveValueHandler}>
      {label}
    </button>
  );
};

export default Button;
