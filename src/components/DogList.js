import React from 'react';

const DogList = (props) => {
  console.log(props);
  return (
    <div>
      <ul>
        {props.dogs.map(dog => <li>{dog}</li>)}
      </ul>
    </div>
  )
};

export default DogList;
