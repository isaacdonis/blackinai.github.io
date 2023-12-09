import { CardMedia, Container, Grid, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';
import image from './../../assets/img/header/bai-img-9.png';


const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    background: {
        display: 'flex',
        position: 'relative',
        backgroundPosition: 'center',
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(3),
        display: 'flex',
        position: 'relative',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 2),
    },
    card: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
    },
    divider: {
        size: "5px",
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
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

function SponsorshipHeader(props) {
    const { classes } = props;

    return (
        <Container className={classes.container}>
            <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                    <Typography align="left" variant="h3" marked="center" className={classes.title}>
                        Become a Black in AI Sponsor
                    </Typography>
                    <Typography align="left" variant="h5">
                        As a sponsor, you will have the utmost impact on various areas of our organization.
                    </Typography>
                    <Typography align="left" variant="h4" className={classes.title}>
                        Become a sponsor of the Black in AI Workshop at NeurIPS 2023
                    </Typography>
                    <ColorButton className={classes.chip} variant="contained" href="https://dashing-snarl-477.notion.site/Black-in-AI-Sponsors-FAQ-46a1df8cc2c64a46ab195734290a665e">
                            Access the NeurIPS 2023 Sponsorship FAQ
                    </ColorButton>
                </Grid>
                <Grid item xs={12} md={6}>
                    <CardMedia component="img" height="400" width="350" image={image}
                        alt="Black people, smiling and holding the flag of Brazil">
                    </CardMedia>
                </Grid>
            </Grid>
        </Container>
    );
}

SponsorshipHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SponsorshipHeader);
