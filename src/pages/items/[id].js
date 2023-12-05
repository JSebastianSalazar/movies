import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { getItemById } from '@/lib/api';
import Head from 'next/head';

const ItemDetail = () => {
    const router = useRouter();
    const { id } = router.query;
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchItem = async () => {
            if (id) {
                try {
                    const fetchedItem = await getItemById(id);
                    setItem(fetchedItem);
                } catch (error) {
                    console.error('Error fetching item:', error);
                }
            }
        };

        fetchItem();
    }, [id]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-8">
            <Head>
                <title>{item.title}</title>
            </Head>
            <h1 className="text-4xl font-bold mb-8">Item Detail</h1>
            <Card className="max-w-sm mx-auto">
                <CardContent>
                    <Typography variant="h6">{item.title}</Typography>
                    <Typography color="textSecondary">{item.description}</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default ItemDetail;
