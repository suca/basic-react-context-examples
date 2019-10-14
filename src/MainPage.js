import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import { UserConsumer } from './UserContext'
const MyFooter = () => (
  <UserConsumer>
    {
      ({user}) => <center><h5><i>By: {user.firstName} {user.lastName}</i></h5></center>
    }
  </UserConsumer>
);

const MainPage = () => (
  <main>
    <Header/>
    <MessageList />
    <MyFooter/>
  </main>
);

export default MainPage;
