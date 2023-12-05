import React from 'react';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Button, Input, Grid, Paper } from '@mui/material';
import {encodeSearchQuery} from "../utils/utils";

const SearchBox = () => {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/items?search=${encodeSearchQuery(query)}`);
    };

    return (
        <Grid container justifyContent='center' alignItems={'center'} alignContent={'center'}>
            <Grid item xs={12} md={6}>
                <Paper elevation={4} style={{ padding: '16px', margin: '16px' }}>
                    <form onSubmit={handleSearch}>
                        <Input
                            sx={{ color:"#65727c", '&::placeholder': { color: '#65727c' } }}
                            fullWidth
                            type="text"
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder="Buscar..."
                        />
                        <Button type='submit' variant='contained' style={{ marginTop: '8px' }}>
                            Buscar
                        </Button>
                    </form>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default SearchBox;
