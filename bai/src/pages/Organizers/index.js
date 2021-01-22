import React, { useState, useEffect} from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import theme from '../../theme';
import TeamMembers from '../../components/TeamMembers';
import Loader from '../../loader';

function Organizers() {
    return (
        <ThemeProvider theme={theme}>
            <Loader/>
            <Navbar />
            <TeamMembers/>
            <Footer />
        </ThemeProvider>
    );
}

export default Organizers;