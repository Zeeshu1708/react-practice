import React from 'react'
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const {count} = useSelector(state=>state.first)
  const dispatch = useDispatch();
  const handleradd = () => {
    dispatch({
      type:"increment",
    });
  };
  const handlerminus = () => {
    dispatch({
      type:"decrement",
    });
  };
  const handleraddfive = () => {
    dispatch({
      type:"addfive",
      payload: 5,
    });
  };

  return (
    <div className="home">
    <h1>{count}</h1>
    <button onClick={handleradd}>Count up</button>
    <button onClick={handlerminus}>Count Down</button>
    <button onClick={handleraddfive}>Add +5</button>
    </div>
  );
};

export default Home;
