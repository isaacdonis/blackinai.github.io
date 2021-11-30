import React from 'react';
import Footer from '../../../components/Footer';
import Navbar from '../../../components/Navbar';
import Loader from '../../../loader';
import { ThemeProvider } from '@material-ui/core';
import theme from '../../../theme';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Card, CardContent, Avatar, Link} from '@material-ui/core/';
import Typography from '../../../components/Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import WorkshopPageHeader from '../../../components/WorkshopPageHeader';
import image from './../../../assets/img/general/header-bai-2021.png';

// images 
import foutse from '../../../assets/img/team/foutse.jpg';
import salomey from '../../../assets/img/team/salomey.jpg';
import mirian from '../../../assets/img/team/mirian.png';
import irenenandutu from '../../../assets/img/team/irene.png';
import ham from '../../../assets/img/team/hameed.jpg'; 

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
    },
    container: {
        marginTop: theme.spacing(15),
        marginBottom: theme.spacing(10),
        display: 'flex',
        position: 'relative',
    },
    more: {
        marginTop: theme.spacing(5),
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'left',
        padding: theme.spacing(0, 5),
    },
    avatarSize: {
        width: theme.spacing(15),
        height: theme.spacing(15),
    },
    icon: {
        alignItems: 'left',
        padding: theme.spacing(1),
        color: theme.palette.primary.dark,
    },
    card: {
        height: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(5),
        display: 'flex',
        width:'100%',
        border: 'none',
        boxShadow: 'none',
    },
});

const teamlist = [
    {
        image: irenenandutu,
        title: 'Irene Nandutu', 
        subtitle: 'PhD Student at Rhodes University',
        bio: 'Irene Nandutu is currently pursuing a PhD in Applied Maths at Rhodes University attached to Rhodes Artificial Intelligence Research Group where she is doing her research in Conservation AI. She has a broad interest in the field of computer vision, NLP, and AI Fairness in relation to solving real-world problems.',
        icon_1: <FontAwesomeIcon icon={["fab", "linkedin"]}/>,
        icon_2: <FontAwesomeIcon icon={["fab", "twitter"]}/>,
        link_1: 'https://www.linkedin.com/in/irene-nandutu-a7792873/',
        link_2: 'https://twitter.com/irenenanduttu'
    },
    {
        image: ham,
        title: 'Hameed Abdul', 
        subtitle: 'PhD student at the University of Illinois at Urbana-Champaign',
        bio: 'Hameed is PhD student at the University of Illinois at Urbana-Champaign. He is broadly interested in the practical intersection of Representation Learning, Computer Vision, and Reinforcement Learning for Robotic Applications.',
        icon_1: <FontAwesomeIcon icon={["fa", "link"]}/>,
        icon_2: <FontAwesomeIcon icon={["fab", "twitter"]}/>,
        link_1: 'https://hammania689.github.io/',
        link_2: 'https://twitter.com/_deprivedchild'
    },
    {
        image: mirian,
        title: 'Mírian Silva', 
        subtitle: 'Master\'s Student @UFMG | AI Engineer at IBM Research',
        bio: 'Mirian (She/Her) is an AI Research Engineer at IBM Research. She is a producer and instructor at Coursera, where she teaches Guided Projects. Currently MSc student in Computer Science at the Federal University of Minas Gerais, Brazil. She holds a BSc. in Computational Mathematics from the same university. Her research interests include broadly AI/ML, with a special focus on Privacy and Trustworthy AI.',
        icon_1: <FontAwesomeIcon icon={["fab", "twitter"]}/>,
        icon_2: <FontAwesomeIcon icon={["fa", "link"]}/>,
        link_1: 'https://twitter.com/mirianfrsilva',
        link_2: 'https://mirianfsilva.github.io/'
    },
    {
        image: salomey,
        title: 'Salomey Osei', 
        subtitle: 'Research Assistant, University of Deusto',
        bio: 'Salomey is a research assistant at DeustoTech, University of Deusto. She is also a researcher at Masakhane and the research lead of unsupervised methods for Ghana NLP. She has been involved with a number of organizations such as Black in AI, Women in Machine Learning (WiML) and Women in Machine Learning and Data Science (WiMLDS) as a co-organiser. She is also passionate about mentoring students, especially females in STEM and her long term goal is to share her knowledge with others by lecturing.',
        icon_1: <FontAwesomeIcon icon={["fab", "twitter"]}/>,
        icon_2: <FontAwesomeIcon icon={["fab", "linkedin"]}/>,
        link_1: 'https://twitter.com/NanaYaaSally',
        link_2: 'https://www.linkedin.com/in/salomey-osei-4b08a5b8/'
    },
    {
        image: foutse,
        title: 'Foutse Yuehgoh', 
        subtitle: 'P.h.D Student at CNAM/ESILV & Coexel',
        bio: 'Foutse holds a BSc. degree in Mathematics and Computer Science (minor) from the University of Buea, Cameroon, and two Master\'s degrees - one in Big Data and Computer security, and the other in Information and Data processing from the African Institute for Mathematical Sciences (AIMS), Senegal and the University of Paris Saclay, France respectively. She is currently pursuing a Ph.D. in Computer Science, working on the intersection of graphs and Natural Language Processing for recommender systems.',
        icon_1: <FontAwesomeIcon icon={["fab", "twitter"]}/>,
        icon_2: <FontAwesomeIcon icon={["fa", "link"]}/>,
        link_1: 'https://twitter.com/yuehgoh',
        link_2: 'https://foutse.github.io/'
    },
];

function TeamMembers(props) {
    const { classes } = props;

    return (
        <ThemeProvider theme={theme}>
            <Loader />
            <Navbar />
            {/* <WorkshopPageHeader src={image}/> */}
            <section className={classes.root}>
                <Container className={classes.container}>
                    <Grid container spacing={4}>
                        <Grid item xs={12}>
                            <Typography variant="h2" marked="center" align="center" component="h2">
                                Black in AI 2021 Workshop Organizers
                            </Typography>
                        </Grid>
                        {teamlist.map((tile) => (
                            <Grid item xs={12} md={6}>
                                <Avatar alt={tile.title} src={tile.image} className={classes.avatarSize} />
                                <Card className={classes.card}>
                                    <CardContent>
                                        <Typography className={classes.title} variant="h6" gutterBottom>
                                            {tile.title}
                                        <Link className={classes.icon} href={tile.link_1}>{tile.icon_1}</Link>
                                        <Link className={classes.icon} href={tile.link_2}>{tile.icon_2}</Link>
                                        </Typography>
                                        <Typography variant="body1" component="h2">
                                            {tile.subtitle}
                                        </Typography>
                                        <br></br>
                                        <Typography variant="body2" component="p">
                                            {tile.bio}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </section>
        <Footer />
        </ThemeProvider>
    );
}

TeamMembers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamMembers);
