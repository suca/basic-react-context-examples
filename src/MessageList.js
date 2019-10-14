import React from 'react';
import { UserConsumer } from './UserContext';
import { EmailConsumer } from './EmailContext';

const MessageList = () => (
  <UserConsumer>
    {({user}) => (
      <EmailConsumer>
        {({emails, loading, error, onSelectEmail}) => (
            <div className="MessageList">
              {
                loading ? <div className="no-messages"></div> : emails.length === 0 ?
                  <div className="no-messages">
                    Your mailbox is empty, <b>{user.firstName} {user.lastName}!</b> 🎉
                  </div>
                : <ul>
                  {emails.map(email => <Email key={email.id} email={email} onClickItem={() => onSelectEmail(email)} />)}
                </ul>
              }
            </div>
          )
        }
      </EmailConsumer>
    )}
  </UserConsumer>
);

const Email = ({ email, onClickItem }) => (
  <li onClick={onClickItem}>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
);

export default MessageList;
