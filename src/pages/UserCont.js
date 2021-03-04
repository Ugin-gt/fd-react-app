import React, { useState } from 'react';
import { UserContext, ThemeContext } from '../contexts';
import UserCard from '../components/UserList/UserCard';

const UserCont = props => {
  const themeState = useState ('lightTheme');
  const setUser = useState({
    id: 10,
    firstName: 'Jason',
    lastName: 'Statham',
    imageSrc:
      'https://i.pinimg.com/originals/5e/13/b3/5e13b316f3437e78886c831cd3964cf5.jpg',
  });
 

  return (
    <ThemeContext.Provider value={themeState}>
      <UserContext.Provider value={setUser}>
        <UserCard />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
};

export default UserCont;
