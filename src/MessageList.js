import React, { useContext } from 'react';
import { UserContext } from './UserContext';
import { EmailContext } from './EmailContext';

const MessageList = () => {
  const { user } = useContext(UserContext);
  const { emails, loading, onSelectEmail } = useContext(EmailContext);

  return (
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
)};

const Email = ({ email, onClickItem }) => (
  <li onClick={onClickItem}>
    <div className="subject">{email.subject}</div>
    <div className="preview">{email.preview}</div>
  </li>
);

export default MessageList;
