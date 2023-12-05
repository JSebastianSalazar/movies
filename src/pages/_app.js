import React from 'react';
import { ThemeProvider, CssBaseline, } from '@mui/material';
import { theme } from '@/styles/theme';
import { ToastContainer, toast } from 'react-toastify';

function MyApp({ Component, pageProps }) {

    const handleApiError = (error) => {
        if (error.response && error.response.data && error.response.data?.mensaje) {
            toast.error(error.response.data?.mensaje);
        } else {
            toast.error('Hubo un error en la aplicación. Por favor, inténtalo de nuevo.');
        }
    };
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Component {...pageProps} onError={handleApiError} />
            <ToastContainer position="bottom-right" />
        </ThemeProvider>
    );
}

export default MyApp;
