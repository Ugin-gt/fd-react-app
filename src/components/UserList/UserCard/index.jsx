import React from 'react';
import { UserContext } from '../../../contexts';

function UserCard (props) {
  return (
    <UserContext.Consumer>
      {user => (
        <article>
          {JSON.stringify(user)}
          <h1>
            Full Name: {user.firstName} {user.lastName}
          </h1>
          <div>ID:{user.id} {user.firstName} {user.lastName}
           <img src={user.imageSrc} alt="UserFoto"/>
           </div>
        </article>
      )}
    </UserContext.Consumer>
  );
}

export default UserCard;
