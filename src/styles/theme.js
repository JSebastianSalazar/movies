import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#65727c',
        },
        secondary: {
            main: '#65727c'
        },
        background: {
            default: '#65727c',
        },
        text: {
            primary: '#FFF',
            secondary: '#65727c'
        }
    },
    typography: {
        fontFamily: 'sans-serif'
    }

});

theme.spacing(10);

export { theme };