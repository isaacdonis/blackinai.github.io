import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import CallForPapers2017 from './../../../posts/bai2017/CallForPapers2017.md';
import Grants2017 from './../../../posts/bai2017/Grants2017.md';
import Organizers2017 from './../../../posts/bai2017/Organizers2017.md';
import ContentFile from '../../../components/Markdown/readfile';

function BAI2017() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <ContentFile href={CallForPapers2017}>
                Black in AI 2017
            </ContentFile>
            <ContentFile href={Grants2017}/>
            <ContentFile href={Organizers2017}/>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(BAI2017);