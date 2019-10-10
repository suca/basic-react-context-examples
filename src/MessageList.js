import React from 'react';
import UserContext from './UserContext';

const MessageList = () => (
  <UserContext.Consumer>
    {({user}) => (
      <div className="MessageList">
        <div className="no-messages">
          Your mailbox is empty, <b>{user.firstName} {user.lastName}!</b> 🎉
        </div>
      </div>
    )}
  </UserContext.Consumer>
);

export default MessageList;
