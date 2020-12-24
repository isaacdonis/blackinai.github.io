import React from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './../../theme';
import HomeHeader from '../../components/HomeHeader';
import JoinUs from '../../components/JoinUs';
import HomeQuote from '../../components/HomeQuote';
import HomeBody from '../../components/HomeBody';

function Home() {
    return (
        <ThemeProvider theme={theme}>
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