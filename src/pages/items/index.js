import React from 'react';
import {
    Grid,
    Skeleton,
} from '@mui/material';
import {searchItems} from '../../lib/api/index';
import Layout from "../../Layout";
import {Item} from "../../components/Item";

const ItemsList = ({items}) => {
    console.log(items)
    return (
        <Layout title={'Movies'}>
            <Grid
                sx={{width: '100%'}}
                container
                spacing={5}
            >
                {items && items.map((item) => (
                    <Item key={item.id} name={item.name} id={item.id} image={item.image} author={item.author}/>
                ))}

                {items.length === 0 && (
                    <>
                        <Grid item xs={6}>
                            <Skeleton variant="rectangular" width="100%" height={200}/>
                        </Grid>
                        <Grid item xs={6}>
                            <Skeleton variant="rectangular" width="100%" height={200}/>
                        </Grid>
                    </>
                )}
            </Grid>
        </Layout>
    );
};


export async function getServerSideProps(context) {
    const {query} = context;
    const {search} = query;

    const items = await searchItems(search);
    return {
        props: {
            items,
        },
    };
}


export default ItemsList;