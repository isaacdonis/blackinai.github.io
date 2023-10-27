import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Link } from "@material-ui/core/";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import React from "react";
import Typography from "../Typography";
import PropTypes from 'prop-types';

const styles = (theme) => ({
    root: {
        display: "flex",
        overflow: "hidden",
        backgroundColor: theme.palette.secondary.dark,
    },
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        display: "flex",
        position: "relative",
        flexDirection: "column",
        alignItems: "center",
    },
    item: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: theme.spacing(0, 5),
    },
    image: {
        height: 30,
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        color: theme.palette.primary.light,
    },
    chip: {
        margin: theme.spacing(1),
        size: "large",
        borderRadius: "40px",
    },
    curvyLines: {
        height: 200,
        top: 0,
    },
    alert: {
        color: theme.palette.error.main,
    },
});


function AdvertisingBar(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid item xs={12}>
                    <div className={classes.item}>
                        <Typography variant="h4" className={classes.title}>
                            <FontAwesomeIcon icon={["fa", "graduation-cap"]} />
                            <Link
                                color="inherit"
                                variant="h4"
                                underline="none"
                                href="/#/programs/academic-program"
                            >
                                {" "} Emerging Leaders in AI: Ph.D. Prep Program, 2023 -
                                2024
                                Applications Open!
                            </Link>
                        </Typography>
                    </div>
                </Grid>
            </Container>
        </section>
    );
}

AdvertisingBar.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AdvertisingBar);
