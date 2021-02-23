import React, { Component, useState } from 'react';
import SingInForm from './components/SingInForm';
import StopWatch from './components/StopWatch';
import Aloha from './components/Aloha';
import Counter from './components/Counter';
import Calendar from './components/Calendar';
import FlexContainer from './components/FlexContainer';
import WindowSize from './components/WindowSize';

function App (props) {
  return (
    <>
      {/* <Counter name='Counter' step={10} /> */}
      <Calendar />

      <WindowSize />
      {/* <FlexContainer jc='center' ai='center' fd='column'>
      <div>Content 1</div>
      <div>Content 2</div>
      <div>Content 3</div>
      <div>Content 4</div>
      <div>Content 5</div>
      <div>Content 6</div>

    </FlexContainer> */}
    </>
  );
}

export default App;
