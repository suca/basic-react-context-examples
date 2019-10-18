import React from 'react';
import { FAKE_USER } from './api';
const UserContext = React.createContext({});
const { Provider, Consumer } = UserContext;

class UserProvider extends React.Component {
    state = {
        currentUser: FAKE_USER
    };

    handleLogin = user => {
        this.setState({ currentUser: user });
    };

    handleLogout = () => {
        this.setState({ currentUser: null });
    };

    render() {
        const {currentUser} = this.state;

        return <Provider value={{
            user: currentUser,
            onLogin: this.handleLogin,
            onLogout: this.handleLogout
          }}>
            {this.props.children}
        </Provider>;
    }
}

export {
    UserProvider,
    Consumer as UserConsumer,
    UserContext,
};
