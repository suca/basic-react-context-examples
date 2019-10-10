import React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import UserContext from './UserContext'
const MyFooter = () => (
  <UserContext.Consumer>
    {
      ({user}) => <center><h5><i>By: {user.firstName} {user.lastName}</i></h5></center>
    }
  </UserContext.Consumer>
);

const MainPage = ({ onLogout }) => (
  <main>
    <Header/>
    <MessageList />
    <MyFooter/>
  </main>
);

export default MainPage;
