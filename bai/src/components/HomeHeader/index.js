import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../Typography';
import { Button, Card, CardMedia, Container, Divider, Grid, GridList, GridListTile } from '@material-ui/core';

import image from './../../assets/img/header/bai-img-2.jpg';
// import image2 from './../../assets/img/header/bai-img-4.JPG';
// import image4 from './../../assets/img/header/bai-img-5.jpg';
// import image5 from './../../assets/img/header/bai-img-6.jpg';


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
        marginTop: theme.spacing(8),
        marginBottom: theme.spacing(8),
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
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
    },
    chip: {
        margin: theme.spacing(1),
        size: 'small',
        borderRadius: "40px",
        marginTop: theme.spacing(3),
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
        color: theme.palette.getContrastText(theme.palette.primary.dark),
        backgroundColor: theme.palette.primary.dark,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    },
}))(Button);

const JoinUsButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.secondary.dark),
        backgroundColor: theme.palette.secondary.dark,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        },
    },
}))(Button);

function HomeHeader(props) {
    const { classes } = props;

    return (
        <Container className={classes.container}>
                <Grid container spacing={3}>
                    <Grid item xs={12} className={classes.container}>
                        <Grid item xs={12} md={6}>
                            <Typography align="left" variant="h3" className={classes.title}>
                                Increasing the presence of black people in the field of artificial intelligence
                            </Typography>
                            <Typography align="left" variant="h5">
                                Black in AI increases the presence and inclusion of Black people in the field of 
                                AI by creating space for sharing ideas, fostering collaborations, mentorship and advocacy.
                            </Typography>
                            <ColorButton className={classes.chip} variant="contained" href="/">
                                Become a Member
                            </ColorButton>
                            <JoinUsButton className={classes.chip} variant="contained" href="/">
                                Partner with Us
                            </JoinUsButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <CardMedia component="img" height="400" width="350" image={image}
                                alt="Almost ten black people, smiling, with raised hands. All wearing the black in AI badge.">
                            </CardMedia>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
    );
}

HomeHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeHeader);
