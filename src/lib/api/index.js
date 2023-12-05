const items = [
    {
        "id": 1,
        "name": "The Shawshank",
        "overview": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "status": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYwsITh63MmQxJ6nrVeXlp6q-2yKesoN_m_z8KtjiQA&s",
        "genres": "Drama",
        "author": "Frank Darabont"
    },
    {
        "id": 2,
        "name": "The Godfather",
        "overview": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "status": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYwsITh63MmQxJ6nrVeXlp6q-2yKesoN_m_z8KtjiQA&s",
        "genres": "Drama",
        "author": "Frank Darabont"
    },
    {
        "id": 3,
        "name": "The Dark Knight",
        "overview": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "status": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYwsITh63MmQxJ6nrVeXlp6q-2yKesoN_m_z8KtjiQA&s",
        "genres": "Drama",
        "author": "Frank Darabont"
    },
    {
        "id": 4,
        "name": "John wick",
        "overview": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
        "status": false,
        "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzYwsITh63MmQxJ6nrVeXlp6q-2yKesoN_m_z8KtjiQA&s",
        "genres": "Drama",
        "author": "Frank Darabont"
    }
];

export const searchItems = (query) => {

    return new Promise((resolve) => {
        const results = items.filter((item) =>
            item.name.toLowerCase().includes(query.toLowerCase())
        );
        resolve(results.slice(0, 4));
    });
};

export const getItemById = (id) => {

    return new Promise((resolve) => {
        const item = items.find((i) => i.id === parseInt(id));
        resolve(item);
    });
};


export const getAllItems = async () => {
    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(items);
        }, 500);
    });
};