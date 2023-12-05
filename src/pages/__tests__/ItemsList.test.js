import  { getServerSideProps } from '../items/index';
import { searchItems } from '../../lib/api/index';

jest.mock('../../lib/api/index');

describe('ItemsList component', () => {
    test('renders items list', async () => {
        const mockItems = [
            { id: 1, name: 'Item 1', image: 'image1.jpg', author: 'Author 1' },
            { id: 2, name: 'Item 2', image: 'image2.jpg', author: 'Author 2' },
        ];

        searchItems.mockResolvedValue(mockItems);
    });

});

describe('getServerSideProps', () => {
    test('fetches items server-side and passes them as props', async () => {
        const mockItems = [
            { id: 1, name: 'Item 1', image: 'image1.jpg', author: 'Author 1' },
            { id: 2, name: 'Item 2', image: 'image2.jpg', author: 'Author 2' },
        ];

        searchItems.mockResolvedValue(mockItems);

        const context = { query: { search: 'query' } };

        const { props } = await getServerSideProps(context);

        expect(props.items).toEqual(mockItems);
    });

    // Add more tests as needed
});
