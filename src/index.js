import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, UserConsumer } from './UserContext';

import './index.css';

class Root extends React.Component {


  render() {
    return (
      <UserConsumer>
        {({user}) => user ? <MainPage /> : <LoginPage />}
      </UserConsumer>
    );
  }
}

ReactDOM.render(
  <UserProvider>
    <Root />
  </UserProvider>,
  document.querySelector('#root'));
