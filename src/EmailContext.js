import React from 'react';
import { fetchEmails, fetchLatestEmails } from './api';
import { withNotifier } from './NotificationContext';

const EmailContext = React.createContext();
const { Provider, Consumer } = EmailContext;

class EmailProvider extends React.Component {
    state = {
        emails: [],
        currentEmail: null,
        error: null,
        loading: false,
    };

    componentDidMount() {
        this.setState({ loading: true, error: null });
        fetchEmails()
          .then(emails => this.setState({ loading: false, emails }))
          .catch(error => this.setState({ loading: false, error }))

        this.refreshTimeInterval = setInterval(this.onRefresh, 5000);;
    }

    componentWillUnmount() {
        clearInterval(this.refreshTimeInterval);
    }

    onSelectEmail = email => {
        this.setState({ currentEmail: email });
    }

    onRefresh = () => {
        if (!this.state.loading) {
            fetchLatestEmails().then(emails => {
              if (emails.length > 0) {
                this.setState(state => ({
                  emails: state.emails.concat(emails)
                }));
                // notify!
                if (this.props.notify) {
                    this.props.notify(
                        `${emails.length} more emails arrived`
                    );
                }
              }
            });
          }
    }

    render() {
        return (
        <Provider value={{
            ...this.state,
            onSelectEmail: this.onSelectEmail
        }}>
            {this.props.children}
        </Provider>
        );
    }
}

// We are doing this because 'notifier' props wasn't part of the Email Provider
const wrapped = withNotifier(EmailProvider);
export {
    wrapped as EmailProvider,
    Consumer as EmailConsumer,
    EmailContext
};
