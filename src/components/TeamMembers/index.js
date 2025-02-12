import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Container, Divider, Avatar, Link} from '@material-ui/core/';
import Typography from '../Typography';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// images

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
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
        height: '20px',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(8),
    },
    divider: {
        backgroundColor: theme.palette.secondary.dark,
        margin: theme.spacing(2, 2),
        // flexItem: true,
        display: "flex",
        width:"150vh",
        height: "1px",
    }, 
    title: {
        marginBottom: theme.spacing(3),
        marginTop: theme.spacing(3),
        color: theme.palette.secondary,
    }
});

const advisoryBoard = [
    {
        image: require('./../../assets/img/team/MakindeAdeagbo.jpeg'),
        name: 'Makinde Adeagbo', 
        link: 'https://www.linkedin.com/in/makinde/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    // {
    //     image: require('./../../assets/img/team/TimnitGebru.jpg'),
    //     name: 'Timnit Gebru',
    //     link: 'https://ai.stanford.edu/~tgebru/',
    //     icon: <FontAwesomeIcon icon={["fa", "link"]} size="1x"/>,
    // },
    {
        image: require('./../../assets/img/team/HabenGirma.jpg'),
        name: 'Haben Girma', 
        link: 'https://www.linkedin.com/in/habengirma/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    {
        image: require('./../../assets/img/team/AyannaHoward.jpg'),
        name: 'Ayanna Howard', 
        link: 'https://www.linkedin.com/in/ayanna-howard/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    {
        image: require('./../../assets/img/team/CharlesIsbell.jpg'),
        name: 'Charles Isbell',
        link: 'https://www.linkedin.com/in/charles-isbell-a12b808/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    {
        image: require('./../../assets/img/team/BrandeisMarshall.jpg'),
        name: 'Brandeis Marshall', 
        link: 'https://www.brandeismarshall.com/',
        icon: <FontAwesomeIcon icon={["fa", "link"]} size="1x"/>,
    },
    {
        image: require('./../../assets/img/team/RodneySampson.jpeg'),
        name: 'Rodney Sampson', 
        link: 'https://www.linkedin.com/in/rodneysampson/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
];

const blackinAIBoard = [
    {
        image: require('./../../assets/img/team/SimoneBartlett.jpg'),
        name: 'Simone Bartlett',
        title: 'Treasurer', 
        link: 'https://www.linkedin.com/in/simone-bartlett-b527275b/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    {
        image: require('./../../assets/img/team/SanmiKoyejo.png'),
        name: 'Sanmi Koyejo', 
        title: 'President', 
        link: 'https://sanmi.cs.illinois.edu/',
        icon: <FontAwesomeIcon icon={["fa", "link"]} size="1x"/>,
    },
    {
        image: require('./../../assets/img/team/EzinneNwanko.jpg'),
        name: 'Ezinne Nwankwo', 
        title: 'Secretary',
        link: 'https://www.linkedin.com/in/ezinne-nwankwo-119586101/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
];

const communityTeam = [
    {
        image: require('./../../assets/img/team/IsaacDonis.jpg'),
        name: 'Isaac Donis', 
        title: '',
        link: 'https://www.linkedin.com/in/isaacdonis/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    {
        image: require('./../../assets/img/team/HassanKane.jpg'),
        name: 'Hassan Kane',
        title: '',
        link: 'https://www.linkedin.com/in/mohamed-hassan-kane-4b50328a/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    {
        image: require('./../../assets/img/team/mirian.jpg'),
        name: 'Mírian Silva', 
        title: '',
        link: 'https://www.linkedin.com/in/mirianfsilva/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
    {
        image: require('./../../assets/img/team/victor.jpg'),
        name: 'Victor Silva', 
        title: '',
        link: 'https://www.linkedin.com/in/nascimentovictor/',
        icon: <FontAwesomeIcon icon={["fab", "linkedin"]} size="1x"/>,
    },
];

function TeamMembers(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h3" marked="center" align="center" className={classes.title}>
                            Our Team
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h5" marked="center" align="center" className={classes.title}>
                            Black in AI Board
                        </Typography>
                    </Grid> 
                    <Grid container justify="center">
                        {blackinAIBoard.map((tile) => (
                            <Grid key={tile} item xs md={2} align="center">
                                <Avatar alt={tile.name} src={tile.image} className={classes.avatarSize} />
                                <Typography className={classes.cardtitle} variant="h6" gutterBottom>
                                    {tile.name} <Link target="_blank" rel="noopener" className={classes.icon} href={tile.link}>{tile.icon}</Link>
                                    <br/>
                                    {tile.title}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>

                    <Divider variant="middle" className={classes.divider}/>
                    
                    <Grid item xs={12}>
                        <Typography variant="h5" marked="center" align="center" className={classes.title}>
                            Advisory Board
                        </Typography>
                    </Grid> 
                    {advisoryBoard.map((tile) => (
                        <Grid item xs align="center">
                            <Avatar alt={tile.name} src={tile.image} className={classes.avatarSize} />
                            <Typography className={classes.cardtitle} variant="h6" gutterBottom>
                                {tile.name} <Link target="_blank" rel="noopener" className={classes.icon} href={tile.link}>{tile.icon}</Link>
                            </Typography>
                        </Grid>
                    ))}

                    <Divider variant="middle" className={classes.divider}/>

                    <Grid item xs={12}>
                        <Typography variant="h5" marked="center" align="center" className={classes.title}>
                            Community Team
                        </Typography>
                    </Grid> 
                    <Grid container justify="center">
                        {communityTeam.map((tile) => (
                        <Grid key={tile} item xs md={2} align="center">
                            <Avatar alt={tile.name} src={tile.image} className={classes.avatarSize} />
                            <Typography className={classes.cardtitle} variant="h6" gutterBottom>
                                {tile.name} <Link target="_blank" rel="noopener" className={classes.icon} href={tile.link}>{tile.icon}</Link>
                            </Typography>
                        </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
        </section>

    );
}

TeamMembers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TeamMembers);
