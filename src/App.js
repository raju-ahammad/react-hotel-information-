import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import Error from "./Components/Layout/Error";
import Home from './Components/Layout/Home';
import Rooms from './Components/Layout/Rooms';
import SingleRoom from './Components/Layout/SingleRoom';

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/single:room" component={SingleRoom} />
        <Route component={ Error } />
      </Switch>
    </>
  );
}

export default App;
