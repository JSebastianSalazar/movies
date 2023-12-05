// pages/items/[id].js
import React from 'react';
import { useRouter } from 'next/router';
import { Card, CardContent, Typography, CardMedia, Button, Grid, Box, Chip } from '@mui/material';
import { getItemById } from '../../lib/api';
import Layout from "@/Layout";
import ImageMedia from "@/components/ImageMedia";

const ItemDetail = ({ item }) => {
    const router = useRouter();
    const { id } = router.query;

    return (
        <Layout title={'Details Movie'}>
            <Grid container justifyContent="center" alignItems="center" >
                <Card style={{ maxWidth: 500, width: '80%', borderRadius: '15px' }} elevation={5} size="lg">
                    <CardContent color='primary'>
                        <ImageMedia image={item.image} name={item.name}/>
                        <Box mb={1}>
                            <Typography variant="h4" align="center">
                                {item.name}
                            </Typography>
                        </Box>
                        <Typography color="textSecondary" gutterBottom align="center">
                            Status: {item.status ? 'Active' : 'Inactive'}
                        </Typography>
                        <Typography color="textSecondary" gutterBottom align="center">
                            Author: {item.author}
                        </Typography>
                        <Typography color="textSecondary" paragraph align="center">
                            Genres:
                        </Typography>
                        <Box display="flex" justifyContent="center" mb={2}>
                            {item.genres.split(',').map((genre, index) => (
                                <Chip key={index} label={genre.trim()} color="primary" style={{ margin: '4px' }} />
                            ))}
                        </Box>
                        <Typography color="textSecondary" paragraph align="center">
                            Overview:
                        </Typography>
                        <Typography color="textSecondary" paragraph align="center">
                            {item.overview}
                        </Typography>
                        <Box mt={3}>
                            <Button variant="contained" color="primary" onClick={() => router.back()} fullWidth>
                                Back to List
                            </Button>
                        </Box>
                    </CardContent>
                </Card>
            </Grid>
        </Layout>

    );
};

export async function getServerSideProps(context) {
    const { id } = context.query;

    try {
        const item = await getItemById(id);

        return {
            props: {
                item,
            },
        };
    } catch (error) {
        console.error('Error getting item by id:', error);
        return {
            notFound: true,
        };
    }
}

export default ItemDetail;
