import React from 'react';
import { render, fireEvent } from '@testing-library/react'
import { EmailContext } from '../EmailContext';
import MessageViewer from '../MessageViewer';

describe('MessageViewer', () => {
    const email  = {
        subject: 'Important email',
        body: 'Please read it as soon as possible'
    }
    test('should view an email', () => {
        const { container } = render(
            <EmailContext.Provider value={{
                currentEmail: email,
            }}>
                <MessageViewer />
            </EmailContext.Provider>
        );

        expect(container.querySelector('h2').textContent).toEqual(
            email.subject
        );

        expect(container.querySelector('h2 + div').textContent).toEqual(
            email.body
        );
    });

    test('should button trigger callbaclk', () => {
        const mockCallback = jest.fn();

        const { container } = render(
            <EmailContext.Provider value={{
                currentEmail: email,
                onSelectEmail: mockCallback
            }}>
                <MessageViewer />
            </ EmailContext.Provider>
        )

        fireEvent.click(container.querySelector('button'));
        // Null because it's a way to display all emails and not a specific one
        expect(mockCallback).toBeCalledWith(null);
    });
});