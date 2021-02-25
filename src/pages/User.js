import React, { Component } from 'react';
import { UserContext } from '../contexts';
import UserCard from '../components/UserList/UserCard';

class User extends Component {
  constructor (props) {
    super(props);
    this.state = {
      user: {
        id: 10,
        firstName: 'John',
        lastName: 'Doe',
        imageSrc:
          'https://i.pinimg.com/originals/5e/13/b3/5e13b316f3437e78886c831cd3964cf5.jpg',
      },
    };
  }

  render () {
    const { user } = this.state;

    return (
      <UserContext.Provider value={user}>
        <div>
          APP
          <UserCard />
        </div>
      </UserContext.Provider>
    );
  }
}

export default User;
