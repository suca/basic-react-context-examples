import React from 'react';
import ReactDOM from 'react-dom';
import LoginPage from './LoginPage';
import MainPage from './MainPage';
import { UserProvider, UserConsumer } from './UserContext';
import { EmailProvider, } from './EmailContext';
import { ColorProvider } from './ColorConsumer';
import { NotificationProvider } from './NotificationContext';
import { MyFancyButton } from './MainPage';
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
  <NotificationProvider>
    <UserProvider>
      <EmailProvider>
        <Root />
      </EmailProvider>
      <footer>
        <MyFancyButton text={'No Background'} />
        <ColorProvider color={'red'}>
          <MyFancyButton text={'Click Me Red!'} />
        </ColorProvider>
        <ColorProvider color={'yellow'}>
          <MyFancyButton text={'Click Me Yellow!'} />
        </ColorProvider>
        <ColorProvider color={'blue'}>
          <MyFancyButton text={'Click Me Blue!'} />
        </ColorProvider>
      </footer>
    </UserProvider>
  </NotificationProvider>,
  document.querySelector('#root'));
