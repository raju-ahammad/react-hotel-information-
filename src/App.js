import React from 'react';
import { Route, Switch } from 'react-router-dom';
import "./App.css";
import Error from "./Components/Layout/Error";
import Home from './Components/Layout/Home';
import Rooms from './Components/Layout/Rooms';
import SingleRoom from './Components/Layout/SingleRoom';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={ Error } />
      </Switch>
    </>
  );
}

export default App;
