import { CssBaseline, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import HomeBody from '../../components/HomeBody';
import HomeHeader from '../../components/HomeHeader';
import HomeQuote from '../../components/HomeQuote';
import JoinUs from '../../components/JoinUs';
import Navbar from '../../components/Navbar';
import Loader from '../../loader';
import theme from './../../theme';

function Home() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <CssBaseline />
            <Navbar/>
            <HomeHeader/>
            <HomeQuote/>
            <HomeBody/>
            <JoinUs/>
            <Footer/>
        </ThemeProvider>
    );
}

export default Home;