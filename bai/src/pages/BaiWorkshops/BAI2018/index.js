import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import withRoot from '../../../withRoot';
import CallForPapers2018 from './../../../posts/bai2018/CallForPapers2018.md';
import Grants2018 from './../../../posts/bai2018/Grants2018.md';
import Organizers2018 from './../../../posts/bai2018/Organizers2018.md';
import ContentFile from '../../../components/Markdown/readfile';

function BAI2018() {
    return (
        <ThemeProvider theme={theme}>
            <Navbar />
            <ContentFile href={CallForPapers2018}>
                Black in AI 2018
            </ContentFile>
            <ContentFile href={Grants2018}/>
            <ContentFile href={Organizers2018}/>
            <Footer />
        </ThemeProvider>
    );
}

export default withRoot(BAI2018);