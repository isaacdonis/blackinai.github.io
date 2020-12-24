import React from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './../../../theme';
import Workshops from '../../../components/Workshops';

function Conferences() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Navbar/>
            <Workshops/>
            <Footer/>
        </ThemeProvider>
    );
}

export default Conferences;