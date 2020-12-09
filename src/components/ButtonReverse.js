import React from 'react';

const ButtonReverse = ({ classname, label, reverseNumberHandler }) => {
  return (
    <button className={classname} onClick={reverseNumberHandler}>
      {label}
    </button>
  );
};

export default ButtonReverse;
