import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button, Divider, ListItem } from '@material-ui/core/';
import Typography from '../Typography';

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

const JoinUsButton = withStyles((theme) => ({
    root: {
        color: theme.palette.getContrastText(theme.palette.primary.light),
        backgroundColor: theme.palette.primary.light,
        '&:hover': {
            backgroundColor: theme.palette.primary.light,
        },
    },
}))(Button);

const valueslist = [
    {
        id: 1, title: '300',
        text: 'We’ve grown from a small facebook group to a global movement comprising 3000 community members and allies who believe that more black people should shape the direction of the field of AI.'
    },
    {
        id: 2, title: '42',
        text: 'Total number of countries with Black in AI members.'
    },
];

function PartnershipBody(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h2" color="secondary" className={classes.title}>
                                Be part of our network
                            </Typography>
                            <ColorButton className={classes.chip} variant="contained" href="/">
                                PARTNER OF US
                            </ColorButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h4" className={classes.title}>
                                Diamond & Platinum Sponsors
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                <ListItem>Recruitment booth at the workshop.</ListItem>
                                <ListItem>Access to attendees opt-in resume booklet.</ListItem>
                                <ListItem>Promotional materials of your organization shown during our workshop proceedings.</ListItem>
                                <ListItem>Logo displayed on our website.</ListItem>
                            </Typography>
                            <Typography variant="h4" className={classes.title}>
                                Gold & Silver Sponsors
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                <ListItem>Access to attendees opt-in resume booklet.</ListItem>
                                <ListItem>Swags and promotional materials of your organization.</ListItem>
                                <ListItem>Logo displayed on our website.</ListItem>
                            </Typography>
                            <Typography variant="h4" className={classes.title}>
                                Bronze Sponsor
                            </Typography>
                            <Typography variant="body1" className={classes.title}>
                                <ListItem>Access to attendees opt-in resume booklet.</ListItem>
                                <ListItem>Logo displayed on our website.</ListItem>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

PartnershipBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PartnershipBody);
