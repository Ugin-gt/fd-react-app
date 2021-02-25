import React, { Component, useState } from 'react';
import SingInForm from './components/SingInForm';
import StopWatch from './components/StopWatch';
import Aloha from './components/Aloha';
import CounterPage from './pages/CounterPage';
import Calendar from './components/Calendar';
import FlexContainer from './components/FlexContainer';
import WindowSize from './components/WindowSize';
import User from './pages/User';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';



function App (props) {
  return (
    <BrowserRouter>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contacts'>Contacts</Link>
          </li>
          <li>
            <Link to='/calendar'>Calendar</Link>
          </li>
          <li>
            <Link to='/window'>Window Size</Link>
          </li>
          <li>
            <Link to='/counter'>Counter</Link>
          </li>
          <li>
            <Link to='/user'>UserPage</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/contacts'>
          <Contacts />
        </Route>
        <Route path='/calendar'>
          <Calendar />
        </Route>
        <Route path='/window'>
          <WindowSize />
        </Route>
        <Route path='/counter'>
          <CounterPage />
        </Route>
        <Route path='/user'>
          <User />
        </Route>
        <Route path='/about'>
          <About />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
const Home = () => {
  return <div>Home Page</div>;
};
const Contacts = () => {
  return <div>Contacts</div>;
};
const About = () => {
  return <div>About</div>;
};



export default App;
