import React, { Component, useState } from 'react';
import SingInForm from './components/SingInForm'
import StopWatch from './components/StopWatch';
import Aloha from './components/Aloha';
import Counter from './components/Counter';

function App(props) {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <>
     <Counter name='Counter' step={10}/>

     <SingInForm name='SingInForm'/>
     
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        SHOW\HIDE STOPWATCH
      </button>
      <Aloha name='Aloha' />
      {isVisible ? <StopWatch /> : null}
    </>
  );
}

export default App;
