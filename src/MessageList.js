import React from 'react';
import { UserConsumer } from './UserContext';

const MessageList = () => (
  <UserConsumer>
    {({user}) => (
      <div className="MessageList">
        <div className="no-messages">
          Your mailbox is empty, <b>{user.firstName} {user.lastName}!</b> 🎉
        </div>
      </div>
    )}
  </UserConsumer>
);

export default MessageList;
