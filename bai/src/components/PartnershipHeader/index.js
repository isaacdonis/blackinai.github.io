import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '../Button';
import Typography from '../Typography';
import { Card, CardMedia, Container, Divider, Grid, GridList, GridListTile } from '@material-ui/core';

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

function PartnershipHeader(props) {
    const { classes } = props;

    return (
        <Container className={classes.container}>
            <Grid container spacing={3}>
                <Grid item xs={12} className={classes.container}>
                    <Grid item xs={12} md={6}>
                        <Typography align="left" variant="h3" marked="center" className={classes.title}>
                            Become a sponsor of Black in AI
                        </Typography>
                        <Typography align="left" variant="h5">
                            TAs a sponsor, you will have the utmost impact on various areas of our organization.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <CardMedia component="img" height="400" width="350" image={image}
                            alt="Black people, smiling and holding the flag of Brazil">
                        </CardMedia>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

PartnershipHeader.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PartnershipHeader);
