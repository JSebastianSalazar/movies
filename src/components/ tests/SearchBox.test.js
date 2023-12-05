import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useRouter } from 'next/router';
import SearchBox from '../SearchBox';

jest.mock('next/router', () => ({
    __esModule: true,
    useRouter: jest.fn(),
}));

describe('SearchBox component', () => {
    test('renders search box correctly', () => {
        render(<SearchBox />);

        expect(screen.getByPlaceholderText('Buscar...')).toBeInTheDocument();
        expect(screen.getByRole('button', { name: /buscar/i })).toBeInTheDocument();
    });

    test('handles search input and submission', () => {
        const pushMock = jest.fn();

        useRouter.mockReturnValue({
            push: pushMock,
        });

        render(<SearchBox />);

        fireEvent.change(screen.getByPlaceholderText('Buscar...'), { target: { value: 'jhon' } });

        expect(screen.getByPlaceholderText('Buscar...')).toHaveValue('jhon');

        fireEvent.submit(screen.getByRole('button', { name: /buscar/i }));

        expect(pushMock).toHaveBeenCalledWith('/items?search=' + encodeURIComponent('jhon'));
    });
});
