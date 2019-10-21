import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { UserConsumer, UserProvider } from '../UserContext';
import { FAKE_USER } from '../api';

describe('UserContext', () => {
    it('should check the default value', () => {
        let consumerValue = 'valueShouldBeReplaced';

        render(
            <UserConsumer>
                {value => {
                    //Assigning the default value of undefined
                    consumerValue = value;
                }}
            </UserConsumer>
        );

        expect(consumerValue).toBeUndefined();
    });

    it('should take the FAKE User', () => {
        const { container } = render(
            <UserProvider>
                <UserConsumer>
                    {
                        ({user}) => <h1>{user.username}</h1>
                    }
                </UserConsumer>
            </UserProvider>
        );

        expect(container.textContent).toBe(FAKE_USER.username);
    });

    it('should onLogin and sets the user', () => {
        const { container } = render(
          <UserProvider>
            <UserConsumer>
              {({ user, onLogin }) => (
                <div>
                  <span>{user.username}</span>
                  <button
                    onClick={() => onLogin({ username: 'Omar' })}
                  />
                </div>
              )}
            </UserConsumer>
          </UserProvider>
        );
        // Clicking the button will set the value to the state and then to the DOM
        fireEvent.click(container.querySelector('button'));
        expect(
          container.querySelector('span').textContent
        ).toEqual('Omar');
      });
      
    it('should onLogout and clears the user', () => {
        const { container } = render(
          <UserProvider>
            <UserConsumer>
              {({ user, onLogout }) => (
                <div>
                  <span>{
                      (!user ? 'NO USER' : '')
                      }</span>
                  <button onClick={() => onLogout()} />
                </div>
              )}
            </UserConsumer>
          </UserProvider>
        );

        // Clicling on the button, will set the user to null
        fireEvent.click(container.querySelector('button'));
        expect(
          container.querySelector('span').textContent
        ).toEqual('NO USER');
      });
});