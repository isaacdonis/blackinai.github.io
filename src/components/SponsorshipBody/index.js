import { Button, Container } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../Typography';
// import sponsor from '../../assets/doc/Black_in_AI_2022_Sponsorship.pdf';
// import { Document, Page } from 'react-pdf';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.secondary.main,
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 60,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: theme.palette.primary.light,
    },
    chip: {
        margin: theme.spacing(1),
        size: 'large',
        borderRadius: "40px",
    },
    divider: {
        backgroundColor: theme.palette.primary.light,
        margin: theme.spacing(2, 2),
        width:"140vh",
        height: "1px",
    }
});

const ColorButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
    secundary: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))(Button);

function SponsorshipBody(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid item xs={12} align="center">
                   <Grid container spacing={5}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" color="secondary" className={classes.title}>
                                Be part of our network
                            </Typography>
                            <Typography variant="h6" color="secondary" align="center" className={classes.title}>
                                To learn more, please contact us at sponsorship@blackinai.org. 
                            </Typography>
                            <ColorButton className={classes.chip} variant="contained" href="https://github.com/blackinai/blackinai.github.io/raw/985c33fa1e59584ac309e72fb16b2f38dadd6ed6/src/assets/doc/BlackinAI_2023_Sponsorship.pdf">
                                Download our sponsorship offerings
                            </ColorButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <iframe title="" src="https://drive.google.com/file/d/1nIr1ePBRXJ6n0jCmYMVbnHkEp3NvyMyo/preview" width="640" height="480" allow="autoplay"></iframe>
                        </Grid>
                    </Grid> 
                </Grid>
            </Container>
        </section>
    );
}

SponsorshipBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SponsorshipBody);
