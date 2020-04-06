import React from 'react';

const ButtonGroup = (props) => {
  return(
    <div>
    <button onClick={props.getDoggos}>GET DOGS</button>
    <button onClick={props.clearDoggos}>CLEAR DOGS</button>
    </div>
  )
};

export default ButtonGroup;
