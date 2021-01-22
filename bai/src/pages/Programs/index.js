import React, { useState, useEffect} from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import theme from './../../theme';
import ProgramsHeader from '../../components/ProgramsHeader';
import ProgramsBody from '../../components/ProgramsBody';
import Loader from '../../loader';

function Programs() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <ProgramsHeader/>
            <ProgramsBody/>
            <Footer />
        </ThemeProvider>
    );
}

export default Programs;