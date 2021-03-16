import { Container } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from '../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(3),
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
    image: {
        height: 60,
    },
    title: {
        marginTop: theme.spacing(3),    },
});

function MembershipDirectory(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={4}>
                    <Grid item xs={12}>
                        <Typography variant="h3" align="center" marked="center" className={classes.title}>
                            Membership Directory
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <iframe src="https://docs.google.com/spreadsheets/d/e/2PACX-1vTAQRnUaZIXa7YR0gC9P58Raf-eqf3ZYezyQDBd_r_C9E-e6fi3bN-EHasVH7nN0CLfiPUR_eF9Qu1M/pubhtml?widget=true&amp;headers=false"
                            width="100%" height="500px">
                        </iframe>
                    </Grid>
                </Grid>
            </Container>
        </section>

    );
}

MembershipDirectory.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MembershipDirectory);
