import React, { useState } from 'react';
import TODO from 'components/TODO';

const Todolist = props => {
  const onSubmit = values => console.log(values);
  return (
    <div>
      <Todolist onSubmit={onSubmit} />
    </div>
  );
};

export default Todolist;
