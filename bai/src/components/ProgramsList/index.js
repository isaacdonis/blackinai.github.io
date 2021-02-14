import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Button } from '@material-ui/core/';
import { Card, CardActionArea, CardContent, CardActions, CardMedia } from '@material-ui/core/';
import Typography from '../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(10),
        marginBottom: theme.spacing(10),
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(0, 5),
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    image: {
        height: 300,
    },
    card: {
        maxWidth: 345,
    },
    title: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(5),
        color: theme.palette.primary.dark,
    },
});

const eachProgram = [
    {
        img: require('./../../assets/img/general/young-black-women-talking.jpg'),
        title: 'Academic Program',
        url: '/#/academic-programs',
        text: 'The Black in AI Academic program is committed to serving as a resource and supporting Black junior researchers as they apply to graduate programs, navigate graduate school, and enter the postgraduate job market. To that end, we conduct online information sessions, provide scholarships to cover costs related to applications, assign participants to peer and senior mentors, and share crowdsourced documents that demystify application processes.'
    },
    {
        img: require('./../../assets/img/general/image2.jpg'),
        title: 'Financial Support',
        url: '/#/programs',
        text: 'Black in AI awards need-based travel grants to attend our annual workshop and the NeurIPS conference. Our grants cover flights, accommodation, daily per diems, visa fees, and registration for the NeurIPS conference. In 2018, 188 works from 28 countries were presented at BAI with a total of $375k given out in travel grants supporting 284 people.'
    },
    {
        img: require('./../../assets/img/general/image3.jpg'),
        title: 'Advocacy',
        url: '/#/programs',
        text: 'Our advocacy on barriers faced by our members ranging from visa issues while attending major AI conferences, to the lack of a presence by international companies on the African continent has resulted in new processes by conferences such as NeurIPS to mitigate barriers faced by our members and the first Google AI center in Africa (Accra, Ghana).'
    },
];

function ProgramsList(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={4}>
                {eachProgram.map((key) => (
                    <Grid container item xs={12} md={4}>
                        <Card className={classes.card}>
                            <CardActionArea>
                                <CardMedia className={classes.media} image={key.img} title={key.title}/>
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="h3">
                                        {key.title}
                                    </Typography>
                                    <Typography variant="body2">
                                        {key.text}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="secondary" href={key.url}>
                                    Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
                </Grid>
            </Container>
        </section>

    );
}

ProgramsList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ProgramsList);
