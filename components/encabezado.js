import Head from 'next/head';
import React from 'react';

const Encabezado = ({title,description}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="icon" href="/logo.jpg" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap" rel="stylesheet"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            <meta name="theme-color" content="#a71b20"/>
        </Head>
    );
}

export default Encabezado;
