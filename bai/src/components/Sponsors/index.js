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
});

const sponsorslist = {
    Diamond: [
        {
            title: 'Apple',
            image: require('./../../assets/img/sponsors-partners/apple.png'),
            link: 'https://www.apple.com/',
            alt: 'Apple logo',
        },
    ],
    Platinum: [
        {
            title: 'IBM',
            image: require('./../../assets/img/sponsors-partners/ibm.png'),
            link: 'https://www.ibm.com/',
            alt: 'IBM Platinum Sponsor'
        },
    ],
    Gold: [
    ],
    Silver: [
        {
            title: 'Oracle',
            image: require('./../../assets/img/sponsors-partners/oracle.png'),
            link: 'https://www.oracle.com/corporate/',
            alt: 'Oracle logo',
        }],
    Bronze: [
        {
            title: 'Upstart',
            image: require('./../../assets/img/sponsors-partners/upstart.png'),
            link: 'https://www.upstart.com/',
            alt: 'Upstart Bronze Sponsor',
        }],
    Ruby: [
            {
                title: 'Microsoft',
                image: require('./../../assets/img/sponsors-partners/microsoft.png'),
                link: 'https://www.microsoft.com/',
                alt: 'Microsoft Ruby Sponsor',
            },
            {
                title: 'Meta',
                image: require('./../../assets/img/sponsors-partners/meta.png'),
                link: 'https://www.meta.com/',
                alt: 'Meta Ruby Sponsor',
            },
    ]
};


function Sponsors(props) {
    const { classes } = props;

    return (
        <section className={classes.root}>
            <Container className={classes.container}>
                <Grid container spacing={12}>
                    <Grid item xs={12}>
                        <Typography variant="h3" marked="center" align="center" component="h2" className={classes.title}>
                            Current Sponsors
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                            Diamond
                        </Typography>
                    </Grid>
                    {sponsorslist.Diamond.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                                <br></br>
                            </div>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                            Platinum
                        </Typography>
                    </Grid>
                    {sponsorslist.Platinum.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                            Silver
                        </Typography>
                    </Grid>
                    {/* {sponsorslist.Gold.map(key => (
                        <Grid item xs={12} md={3}>
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))} */}
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
                        <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                            Bronze
                        </Typography>
                    </Grid>
                    {sponsorslist.Bronze.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
                                </Link>
                            </div>
                        </Grid>
                    ))}
                    <Grid item xs={12}>
                        <Typography variant="h4" marked="center" align="center" component="h2" className={classes.title}>
                            Ruby
                        </Typography>
                    </Grid>
                    {sponsorslist.Ruby.map(key => (
                        <Grid item xs align="center">
                            <div className={classes.item}>
                                <Link href={key.link}>
                                    <img alt={key.title} src={key.image} className={classes.avatarSize} />
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
