import React, { Component, useState } from 'react';
import SingInForm from './components/SingInForm'
import StopWatch from './components/StopWatch';
import Aloha from './components/Aloha';
import Counter from './components/Counter';
import Calendar from './components/Calendar';


function App(props) {


  return (
    <>
      <Counter name='Counter' step={10} />
      <Calendar  />
    </>


  );
}

export default App;
