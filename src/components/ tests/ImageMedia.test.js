import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ImageMedia from '../ImageMedia';
import expect from "expect";

describe('ImageMedia Component', () => {
    it('renders correctly with given props', () => {
        const image = 'path/to/image.jpg';
        const name = 'Test Image';

        const { getByAltText, getByTestId }
            = render(<ImageMedia image={image} name={name} />);

        expect(getByTestId('card-media')).toBeInTheDocument();

        expect(getByAltText(name)).toBeInTheDocument();
        expect(getByTestId('card-media')).toHaveStyle('object-fit: fill; width: 100%; border-radius: 15px;');
    });
});