import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import PartnershipBody from '../../components/PartnershipBody';
import PartnershipHeader from '../../components/PartnershipHeader';
import Sponsors from '../../components/Sponsors';
import Loader from '../../loader';
import theme from './../../theme';

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