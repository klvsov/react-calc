import React from 'react';

const Button = ({ classname, label, updateValue }) => {
  return (
    <button className={classname} onClick={() => updateValue(label)}>
      {label}
    </button>
  );
};

export default Button;
