import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './../../theme';
import AboutHeader from '../../components/AboutHeader';
import CommunityValues from '../../components/CommunityValues';
import TeamMembers from '../../components/TeamMembers';
import JoinUs from '../../components/JoinUs';
import Loader from '../../loader';

function About() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <CssBaseline />
            <Navbar />
            <AboutHeader />
            <CommunityValues />
            <TeamMembers />
            <JoinUs />
            <Footer />
        </ThemeProvider>
    );
}
export default About;