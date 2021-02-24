import React, { useState, useEffect} from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../theme';
import withRoot from '../../withRoot';
import AcademicPage from './../../posts/baiPrograms/AcademicPrograms.md';
import ContentFile from './../../components/Markdown/readfile';
import Loader from '../../loader';
import PageHeader from '../../components/WorkshopPageHeader';
import image from './../../assets/img/general/academic_programs.jpg';

function AcademicPrograms() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <PageHeader src={image}/>
            <ContentFile href={AcademicPage}>
                Academic Programs
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(AcademicPrograms);