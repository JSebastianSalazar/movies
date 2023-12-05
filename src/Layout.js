import React from 'react';
import {Box, Typography} from '@mui/material';

const Layout = ({ children, title }) => {
    return (
        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: 10}}>
                <Typography variant="h2" gutterBottom>
                    {title}
                </Typography>
                {children}
            </Box>
            <Box sx={{ textAlign: 'center', padding: 2, backgroundColor: '#474b4e' }}>
                <Typography variant="h5">Movies 1.0</Typography>
            </Box>
        </Box>
    );
};

export default Layout;