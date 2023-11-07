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
const sponsorslist = {
    Ruby: [],
    Diamond: [],
    Platinum: [
        {
            title: 'Deepmind',
            image: require('./../../assets/img/sponsors-partners/deepmind2.png'),
            link: 'https://www.upstart.com/',
            alt: 'Deepmind Platinum Sponsor & Corporate Sponsor for Equity',
        }
    ],
    Gold: [
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
    ],
    Silver: [
        {
            title: "Vector Institute",
            image: require('./../../assets/img/sponsors-partners/vectorInstitute.png'),
            link: "https://vectorinstitute.ai/",
            alt: "Vector Institute Silver Sponsor"
        }],
    Bronze: [
        {
            title: "Duolingo",
            image: require('./../../assets/img/sponsors-partners/duolingo.png'),
            link: "https://www.duolingo.com/",
            alt: "Duolingo Bronze Sponsor"
        },
    ],
};


function Sponsors(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h3" marked="center" align="center" component="h2" className={classes.title}>
                            2023 Sponsors
                        </Typography>
                    </Grid>
                    {/* <Grid item xs={12}>
                        <Typography variant="h4" align="center" component="h2" className={classes.title}>
                            Ruby
                        </Typography>
                    </Grid> */}
                    {/* {sponsorslist.Ruby.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))} */}
                    {/* <Grid item xs={12}>
                        <Typography variant="h4" align="center" component="h2" className={classes.title}>
                            Diamond
                        </Typography>
                    </Grid> */}
                    {/* {sponsorslist.Diamond.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                                <br></br>
                            </div>
                        </Grid>
                    ))} */}
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" component="h2" className={classes.title}>
                            Platinum
                        </Typography>
                    </Grid>
                    {sponsorslist.Platinum.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.duolingoAvatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" component="h2" className={classes.title}>
                            Gold
                        </Typography>
                    </Grid>
                    {sponsorslist.Gold.map(key => (
                        <Grid item md align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" component="h2" className={classes.title}>
                            Silver
                        </Typography>
                    </Grid>
                    {sponsorslist.Silver.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Typography variant="h4" align="center" component="h2" className={classes.title}>
                            Bronze
                        </Typography>
                    </Grid>
                    {sponsorslist.Bronze.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.duolingoAvatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </section>
    );
}

Sponsors.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Sponsors);
