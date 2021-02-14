import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import CallForPapers2019 from './../../../posts/bai2019/CallForPapers2019.md';
import Grants2019 from './../../../posts/bai2019/Grants2019.md';
import ContentFile from '../../../components/Markdown/readfile';
import WorkshopPageHeader from '../../../components/WorkshopPageHeader';
import image from './../../../assets/img/general/vancouver_convention_center.jpg';
import Loader from '../../../loader';

function BAI2019() {
    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            <WorkshopPageHeader src={image}/>
            <ContentFile href={CallForPapers2019}>
                Black in AI 2019
            </ContentFile>
            <ContentFile href={Grants2019}/>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(BAI2019);