import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button, Divider , Link} from '@material-ui/core/';
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
        flexItem: true,
        height: "1px",
    },
    list: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(4),
        color: theme.palette.primary.light,
    },
    listButton: {
        margin: theme.spacing(-1),
        size: 'medium',
        borderRadius: "40px",
        marginLeft: theme.spacing(25),
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

function ProgramsBody(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h2" align="center" color="secondary" className={classes.title}>
                            Conferences & Workshops
                        </Typography>
                    </Grid>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={6}>
                            <Typography className={classes.title}>
                                Our annual Black in AI (BAI) workshop co-located with NeurIPS, as well as our 
                                satellite gatherings in other AI conferences (e.g. AAAI, CVPR, ICML, FAT*) allow 
                                members of the BAI community to attend NeurIPS without feeling isolated.
                            </Typography>
                            <JoinUsButton className={classes.chip} variant="contained" href="/">
                                Become a Sponsor
                            </JoinUsButton>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Typography variant="body1" className={classes.list}>
                                BAI 2020
                                <ColorButton className={classes.listButton} variant="contained" href="/">Attend</ColorButton>
                            </Typography>
                            <Divider variant="middle" className={classes.divider}/>
                            <Typography variant="body1" className={classes.list}>
                                BAI 2019
                                <JoinUsButton className={classes.listButton} variant="contained" href="/">VIEW HIGHLIGHTS</JoinUsButton>
                            </Typography>
                            <Divider variant="middle" className={classes.divider}/>
                            <Typography variant="body1" className={classes.list}>
                                BAI 2018
                                <JoinUsButton className={classes.listButton} variant="contained" href="/">VIEW HIGHLIGHTS</JoinUsButton>
                            </Typography>
                            <Divider variant="middle" className={classes.divider}/>
                            <Typography variant="body1" className={classes.list}>
                                <Link href="/conferences">View more conferences</Link>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </section>
    );
}

ProgramsBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgramsBody);
