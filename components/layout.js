import React from 'react';
import Navbar from './Navbar/navbar';
import NProgress from 'nprogress';
import Router from 'next/router';
Router.events.on('routeChangeStart', () => NProgress.start() );
Router.events.on('routeChangeComplete', () => NProgress.done() );
Router.events.on('routeChangeError', () => NProgress.done() );

const Layout = (props) => {
    return (
        <>
            <Navbar/>
            {props.children}
        </>
    );
}

export default Layout;
