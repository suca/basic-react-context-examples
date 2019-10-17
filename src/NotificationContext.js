import React from 'react';
const { Provider, Consumer } = React.createContext();

class NotificationProvider extends React.Component {
    state = {
        messages: [],
    }

    addMessage = (text) => {
        this.setState(state =>({
            messages: [
                ...state.messages,
                {
                    id: Math.random(),
                    text,
                    addedAt: new Date().getTime(),
                }
            ]
        }));
    }

    removeMessage ({ id }) {
        this.setState(state => ({
            messages: state.messages.filter(msg => msg.id !== id)
        }));
    }

    render() {
        const { messages }= this.state;

        return <Provider value={{
            ...this.state,
            notify: this.addMessage
        }}>
            <div className="notification-wrapper">
                <ul>
                    {
                        messages.map(notif => (
                            <NotificationCard
                                key={notif.id}
                                message={notif.text}
                                onCloseHandler={() => this.removeMessage(notif)}
                                />)
                        )
                    }
                </ul>
                {this.props.children}
            </div>
        </Provider>
    }
}

const NotificationCard = ({ message, onCloseHandler}) => (
    <li>
        {message}
        <button className="close" onClick={onCloseHandler}>X</button>
    </li>
);

function withNotifier (Component) {
    return function(props) {
        return <Consumer>
            {({notify}) => (
                <Component {...props} notify={notify} />
            )}
        </Consumer>
    }
}

export {
    NotificationProvider,
    Consumer as NotificationConsumer,
    withNotifier,
};