import React from 'react';

const { Provider, Consumer } = React.createContext({});

const ColorProvider = (props) => (
    <Provider value={{ ...props }}>
        {props.children}
    </Provider>
);

export { ColorProvider, Consumer as ColorConsumer };