import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import { UserConsumer } from './UserContext'
import { EmailConsumer } from './EmailContext';
import { ColorConsumer } from './ColorConsumer';
import MessageViewer from './MessageViewer';
const MyFooter = () => (
  <div>
    <UserConsumer>
    {
      ({user}) => <center><h5><i>By: {user.firstName} {user.lastName}</i></h5></center>
    }
  </UserConsumer>
  <MyFancyButton />  
  </div>
);

export const MyFancyButton = (props) => (
  <ColorConsumer>
    {(attrs) => (
      <button style={{backgroundColor: attrs.color, color: '#000'}} {...attrs}>
        {props.text}
      </button>
    )}
  </ColorConsumer>
);

const MainPage = () => (
  <EmailConsumer>
    {({currentEmail}) => {
      return (
        <main>
          <Header/>
          {currentEmail ? <MessageViewer /> : <MessageList />}
          <MyFooter/>
        </main>
      );
    }}
  </EmailConsumer>
);

export default MainPage;
