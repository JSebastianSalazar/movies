import React from 'react';
import SearchBox from '../components/SearchBox';
import Head from 'next/head';
import Layout from "@/Layout";

const Home = () => {


    return (
        <>
            <Head>
                <title>Movies JS</title>
                <meta name="description" content="Explora una amplia selección de películas emocionantes.
                 Encuentra información detallada,
                 reseñas y detalles sobre tus películas favoritas. ¡Descubre el mundo del cine con nuestra aplicación!" />
                <meta name="keywords" content="peliculas, películas, entretenimiento, cine, actores, directores,
                 clasificación, géneros, estrenos, taquilla, críticas, opiniones, drama, comedia, acción, aventura" />
                <meta name="author" content="Johan Sebastian Salazar Muñoz" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <Layout title={'Welcome to Movie Search'}>
                <SearchBox/>
            </Layout>
        </>

    );
};

export default Home;
