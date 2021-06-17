import Head from 'next/head';
import React from 'react';

const Encabezado = ({title,description,url,facebook,image}) => {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description}/>
            <link rel="icon" href="/logo.jpg" />
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;800&display=swap" rel="stylesheet"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
            <meta name="theme-color" content="#a71b20"/>
            <meta property="og:locale" content="es_ES"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:url" content={url}/>
            <meta property="og:site_name" content="Rossetto Propeidades"/>
            <meta property="article:publisher" content={facebook}/>
            <meta property="article:section" content="Propiedades"/>
            <meta property="og:image" content={image ? image : `/logo.jpg`}/>
            <meta property="og:image:secure_url" content={url}/>
            <meta property="og:image:width" content="1200"/>
            <meta property="og:image:height" content="600"></meta>
        </Head>
    );
}

export default Encabezado;
