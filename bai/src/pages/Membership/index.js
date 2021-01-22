import React, { useState, useEffect} from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import MembershipHeader from '../../components/MembershipHeader';
import { ThemeProvider, Container, Box } from '@material-ui/core';
import theme from './../../theme';
import MembershipBody from '../../components/MembershipBody';
import Loader from '../../loader';

function Membership() {
    return (
        <ThemeProvider theme={theme}>
            <Loader/>
            <Navbar />
            <MembershipHeader/>
            <MembershipBody/>
            <Footer />
        </ThemeProvider>
    );
}

export default Membership;