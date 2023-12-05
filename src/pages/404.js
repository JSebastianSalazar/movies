import React from 'react';
import Link from 'next/link';
import { Container, Typography, Button } from '@mui/material';
import Layout from "@/Layout";

const NotFound = () => {
    return (
        <Layout>
            <Container
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',

                }}
            >
                <img
                    src="https://media.giphy.com/media/C21GGDOpKT6Z4VuXyn/giphy.gif"
                    alt="404 Not Found"
                    width="300"
                    height="300"
                    style={{
                        marginBottom: '20px',
                        borderRadius: '10px',
                    }}
                />

                <Typography variant="h4" align="center" gutterBottom>
                    ¡Ops! Parece que te has perdido.
                </Typography>
                <Typography variant="body1" align="center" paragraph>
                    La página que estás buscando no existe.
                </Typography>

                <Link href="/" passHref>
                    <Button variant="contained" color="primary">
                        Volver a la página de inicio
                    </Button>
                </Link>
            </Container>
        </Layout>
    );
};

export default NotFound;
