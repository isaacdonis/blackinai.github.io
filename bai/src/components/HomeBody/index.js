import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '../Typography';
import { Card, Button, CardMedia, Container, Divider, Grid } from '@material-ui/core';

const image1 = "https://images.unsplash.com/photo-1573164574397-dd250bc8a598?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";
const image2 = "https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";
const image3 = "https://images.unsplash.com/photo-1524087460115-e21f419c9e1e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80";

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        flexGrow: 1,
    },
    container: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex',
        position: 'relative',
        padding: theme.spacing(0),
    },
    cardMedia: {
        flexGrow: 1,
        height: 400,
        color: theme.palette.common.white,
        backgroundImage: 'url(image)',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    title: {
        marginBottom: theme.spacing(5),
    },
    chip: {
        margin: theme.spacing(1),
        size: 'small',
        borderRadius: "40px",
    },
    cardText: {
        margin: theme.spacing(5),
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
}))(Button);

function HomeBody(props) {
    const { classes } = props;

    return (
        <Container className={classes.container}>
            <Grid container>
                <Grid item xs={12} className={classes.container}>
                    <Grid item xs={12}>
                        <Container className={classes.cardMedia} style={{ backgroundImage: `url(${image1})` }}>    
                            {<img style={{ display: 'none' }} src={image1} />}
                        </Container>
                    </Grid>
                    <Grid item xs={12} className={classes.cardText}>
                        <Typography variant="h4" align="center" marked="center" className={classes.title}>
                            Fostering an including, end-to-end ecosystem
                        </Typography>
                        <Typography variant="body1" className={classes.title}>
                            Our initiatives include an academic positions mentorship program, events at 
                            various conferences related to AI, advocacy, and community building 
                            (through our online forums).
                        </Typography>
                        <ColorButton className={classes.chip} variant="contained" href="/">
                            See Our Programns
                        </ColorButton>
                    </Grid>
                </Grid>
                <Grid item xs={12} className={classes.container}>
                    <Grid item xs={12} className={classes.cardText}>
                        <Typography variant="h4" align="center" marked="center" className={classes.title}>
                            A vibrant online community
                        </Typography>
                        <Typography variant="body1" className={classes.title}>
                            We use the Facebook group for social discussions related to AI or being a Black 
                            researcher. We use the forum to aggregate scholarships, fellowships, internship 
                            and job opportunities, summer schools, or research related discussions.
                        </Typography>
                        <ColorButton className={classes.chip} variant="contained" href="/">
                            Join Us
                        </ColorButton>
                    </Grid>
                    <Container className={classes.cardMedia} style={{ backgroundImage: `url(${image2})` }}>    
                        {<img style={{ display: 'none' }} src={image2} />}
                    </Container>
                </Grid>
                <Grid item xs={12} className={classes.container}>
                    <Grid item xs={12}>
                        <Container className={classes.cardMedia} style={{ backgroundImage: `url(${image3})` }}>    
                            {<img style={{ display: 'none' }} src={image3} />}
                        </Container>
                    </Grid>
                    <Grid item xs={12} className={classes.cardText}>
                        <Typography variant="h4" align="center" marked="center" className={classes.title}>
                            A global network of partners
                        </Typography>
                        <Typography variant="body1" className={classes.title}>
                            Partners play a key role in accelerating our mission and impact through 
                            making our workshop feasible and sustaining our community
                        </Typography>
                        <ColorButton className={classes.chip} variant="contained" href="/">
                            Learn More
                        </ColorButton>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}

HomeBody.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(HomeBody);
