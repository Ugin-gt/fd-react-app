import React, { useState, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { MenuOpen } from '@material-ui/icons';
import UseEffectStopWatch from 'components/UseEffectStopWatch';
import CounterPage from 'pages/CounterPage';
import Calendar from 'components/Calendar';
import WindowSize from 'components/WindowSize';
import UserCont from 'pages/UserCont';
import NavMenu from 'components/NavMenu';
import { THEMES, ACTIONS } from './constants';
import { ThemeContext, AppContext } from 'contexts';
import reducer from 'appReducer';



const App = props => {
  const themeState = useState(THEMES.LIGHT);
  const [state, dispatch] = useReducer(reducer, {
    isMenuOpen: false,
  });

  const openMenu = () => dispatch({ type: ACTIONS.MENU_OPEN });
  const closeMenu = () => dispatch({ type: ACTIONS.MENU_CLOSE });

  return (
    <AppContext.Provider value={{ state, openMenu, closeMenu }}>
      <ThemeContext.Provider value={themeState}>
        <BrowserRouter>
          <MenuOpen
            onClick={openMenu}
            onKeyDown={e => {
              if (e.key === 'Enter') {
                openMenu();
              }
            }}
            tabIndex='0'
            />
          <NavMenu />
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
    </ThemeContext.Provider>
    </AppContext.Provider>
  );
};
const Home = () => <div>Home Page</div>;
const About = () => <div>About Page</div>;

export default App;
