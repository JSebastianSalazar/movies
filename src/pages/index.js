import {useState} from 'react';
import SearchBox from '../components/SearchBox';
import {Grid, Typography} from "@mui/material";
import Layout from "@/Layout";

const Home = () => {
    const [searchQuery, setSearchQuery] = useState('');

    const handleSearch = (query) => {

        console.log(query)
        setSearchQuery(query);
    };

    return (
        <Layout title={'Welcome to Movie Search'}>
            <SearchBox onSearch={handleSearch} />
        </Layout>
    );
};

export default Home;
