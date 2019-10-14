import React from 'react';
import { FAKE_USER } from './api';

const { Provider, Consumer } = React.createContext({});
// Context.Consumer, Context.Provider

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
    Consumer as UserConsumer
};
