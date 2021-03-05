import React from 'react';
import SingInForm from './components/SingInForm';
import StopWatch from './components/StopWatch';
import UseEffectStopWatch from './components/UseEffectStopWatch';
import Aloha from './components/Aloha';
import CounterPage from './pages/CounterPage';
import Calendar from './components/Calendar';
import FlexContainer from './components/FlexContainer';
import WindowSize from './components/WindowSize';
import UserCont from './pages/UserCont';
import NavigationMenu from './components/NavigationMenu';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';

const App = props => {
  return (
    <BrowserRouter>
      {/* <button onClink={isOpen} > </button> */}
      <NavigationMenu />

      <Switch>
        <Route exact path='/' component={Home} />

        <Route path='/user-cont' component={UserCont} />

        <Route path='/calendar' component={Calendar} />

        <Route path='/window' component={WindowSize} />

        <Route path='/counter' component={CounterPage} />

        <Route path='/stop-watch' component={UseEffectStopWatch} />

        <Route path='/about' component={About} />
      </Switch>
    </BrowserRouter>
  );
};
const Home = () => <div>Home Page</div>;
const About = props => <div>About Page</div>;

export default App;
