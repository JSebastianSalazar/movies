import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Item } from '../Item.js';

describe('Item component', () => {
    const mockItem ={
        "name": "John Wick",
        "overview": "John Wick is an American neo-noir action thriller media franchise created by Derek Kolstad and centered on John Wick, a former hitman who is drawn back into the criminal underworld he had previously abandoned.",
        "status": false,
        "image": "https://raw.githubusercontent.com/JSebastianSalazar/movies-image/main/image/unnamed.jpg",
        "genres": "Drama, Action, Adverture",
        "author": "Derek Kolstad"
    };

    test('renders item details correctly', () => {
        render(<Item {...mockItem} />);
        // Check if item details are rendered correctly
        expect(screen.getByText(mockItem.name)).toBeInTheDocument();
        expect(screen.getByText(mockItem.author)).toBeInTheDocument();
    });

    test('renders "Details" button with correct link', () => {
        render(<Item {...mockItem} />);

        // Check if the "Details" button is rendered and contains the correct link
        const detailsButton = screen.getByText('Details');
        expect(detailsButton).toBeInTheDocument();
        expect(detailsButton.closest('a')).toHaveAttribute('href', `/items/${mockItem.id}`);
    });

    // Add more tests as needed for specific functionality or interactions
});
