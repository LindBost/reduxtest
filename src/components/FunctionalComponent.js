import React, {useState, useEffect} from 'react';
import ButtonGroup from "./ButtonGroup";
import DogList from "./DogList";
import {useDispatch, useSelector} from "react-redux";
import {clearDogs, getDogs} from "../actions/dogActions";

const FunctionalComponent = () => {

  const dogs = useSelector(state => state.dogs);
  const dispatch = useDispatch();

  useEffect(() => {
    setFilteredDogs(dogs)
  }, [dogs])

  const[filteredDogs, setFilteredDogs] = useState([]);

  const getDoggos = () => {
    dispatch(getDogs())
  };

  const clearDoggos = () => {
    dispatch(clearDogs())
  };

  const filterDogs = () => {
    const copy = [...dogs];
    const filtered = copy.filter(c => c.startsWith("e"));
    setFilteredDogs(filtered);
  };

  return (
    <div>
      <h2>FUNCTIONAL</h2>
      <button onClick={
        filterDogs
      }> Filter</button>
      <ButtonGroup
      getDoggos={getDoggos}
      clearDoggos={clearDoggos}
      />
      <DogList
      dogs={filteredDogs}
      />
    </div>
  )
};

export default FunctionalComponent;
