import React, { useState, useEffect} from 'react';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './../../../theme';
import Workshops from '../../../components/Workshops';
import Loader from '../../../loader';

function Conferences() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <CssBaseline />
            <Navbar/>
            <Workshops/>
            <Footer/>
        </ThemeProvider>
    );
}

export default Conferences;