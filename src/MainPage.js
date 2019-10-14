import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import { UserConsumer } from './UserContext'
import { EmailConsumer } from './EmailContext';
import MessageViewer from './MessageViewer';
const MyFooter = () => (
  <UserConsumer>
    {
      ({user}) => <center><h5><i>By: {user.firstName} {user.lastName}</i></h5></center>
    }
  </UserConsumer>
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
