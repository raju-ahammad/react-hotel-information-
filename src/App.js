import React from 'react';
import "./App.css";
import Error from "./Components/Layout/Error";
import Home from './Components/Layout/Home';
import Rooms from './Components/Layout/Rooms';
import SingleRoom from './Components/Layout/SingleRoom';

function App() {
  return (
    <>
      <Home/>
      <Rooms/>
      <SingleRoom/>
      <Error/>
    </>
  );
}

export default App;
