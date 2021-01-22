import React, { useState, useEffect} from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import theme from './../../theme';
import PartnershipBody from '../../components/PartnershipBody';
import PartnershipHeader from '../../components/PartnershipHeader';
import Sponsors from '../../components/Sponsors';
import Loader from '../../loader';

function Partnership() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <PartnershipHeader/>
            <PartnershipBody/>
            <Sponsors/>
            <Footer />
        </ThemeProvider>
    );
}

export default Partnership;