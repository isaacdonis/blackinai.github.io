import { Container, Link } from '@material-ui/core/';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';
import Typography from './../Typography';

const styles = (theme) => ({
    root: {
        display: 'flex',
        overflow: 'hidden',
        backgroundColor: theme.palette.primary.light,
    },
    container: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(6),
        display: 'flex',
        position: 'relative',
        alignItems: 'center',
    },
    item: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(3),
        justify: 'center',
    },
    image: {
        height: 80,
    },
    title: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(5),
    },
    chip: {
        margin: theme.spacing(1),
        size: 'small',
        borderRadius: "40px",
    },
    avatarSize: {
        height: theme.spacing(8),
    },
    duolingoAvatarSize: {
        height: theme.spacing(12),
    },
});
// Ruby -> Diamond -> Platinum -> Gold -> Silver -> Bronze -> Thank You

const sponsorslist = [
        {
            title: 'Apple',
            image: require('./../../assets/img/sponsors-partners/apple.png'),
            link: 'https://www.apple.com/',
            alt: 'Apple Gold Sponsor',
        },
        {
            title: 'IBM',
            image: require('./../../assets/img/sponsors-partners/ibm.png'),
            link: 'https://www.ibm.com/',
            alt: 'IBM Gold Sponsor'
        },
        {
            title: 'D. E. Shaw Research',
            image: require('./../../assets/img/sponsors-partners/deshaw.jpg'),
            link: 'https://www.deshaw.com/',
            alt: 'D. E. Shaw Research Gold Sponsor',
        },
        {
            title: "Duolingo",
            image: require('./../../assets/img/sponsors-partners/duolingo.png'),
            link: "https://www.duolingo.com/",
            alt: "Duolingo Bronze Sponsor"
        },
        {
            title: "Vector Institute",
            image: require('./../../assets/img/sponsors-partners/vectorInstitute.png'),
            link: "https://vectorinstitute.ai/",
            alt: "Vector Institute Silver Sponsor"
        }
]

const CorporateSponsorsforEquity = [
    {
        title: 'Deepmind',
        image: require('./../../assets/img/sponsors-partners/deepmind2.png'),
        link: 'https://deepmind.google/',
        alt: 'Deepmind Platinum Sponsor & Corporate Sponsor for Equity',
    }
]


function SponsorsHome(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h3" marked="center" align="center" component="h2" className={classes.title}>
                            2023 Current Sponsors
                        </Typography>
                    </Grid>
                    {sponsorslist.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" component="h3" className={classes.title}>
                                Corporate Sponsors for Equity
                        </Typography>
                        {CorporateSponsorsforEquity.map(key => (
                            <Grid item xs align="center">
                                <div className={classes.item}>
                                    <Link href={key.link}>
                                        <img alt={key.title} src={key.image} className={classes.duolingoAvatarSize} />
                                    </Link>
                                    <br></br>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Container>
            
            {/* <Container>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h3" marked="center" align="center" component="h2" className={classes.title}>
                            Corporate Sponsors for Equity
                        </Typography>
                    </Grid>
                    {CorporateSponsorsforEquity.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container> */}
        </section>
    );
}

SponsorsHome.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SponsorsHome);
