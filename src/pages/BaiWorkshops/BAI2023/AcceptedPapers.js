import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import AcceptedPapers2023 from './../../../posts/bai2023/AcceptedPapers2023.md';
import ContentFile from '../../../components/Markdown/readfile';
import WorkshopPageHeader from '../../../components/WorkshopPageHeader';
import image from './../../../assets/img/general/header-bai-2023.png';
import Loader from '../../../loader';

function AcceptedPapers() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <WorkshopPageHeader src={image}/>
            <ContentFile href={AcceptedPapers2023}>
                Black in AI 2023 - Accepted Papers
            </ContentFile>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(AcceptedPapers);