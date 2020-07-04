import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    title: {
        [theme.breakpoints.down("md")]: {
            fontSize: "4em",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "3em",
        },
    },
    subTitle: {
        [theme.breakpoints.down("md")]: {
            fontSize: "1.8em",
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: "1.5em",
        },
        [theme.breakpoints.down("xs")]: {
            fontSize: "1.2em",
        },
    },
    image: {
        borderRadius: '100%',
        width: '16em',
        [theme.breakpoints.down('sm')]: {
            width: '10em'
        },
        [theme.breakpoints.down('xs')]: {
            width: '6em'
        }
    }
}));

const WeddingParty = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container justify={"center"} direction={"column"}>
            <Grid item>
                <Grid item container justify={'center'}>
                    <Grid item>
                        <Typography variant={'h1'} className={classes.title}>Wedding Party</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item style={{marginTop: '4em'}}>
                <Grid item container justify={'space-around'}>
                    {/*ASHLEE*/}
                    <Grid item>
                        <Grid item container direction={'column'} alignItems={'center'}>
                            <Grid item>
                                <img className={classes.image} src="/weddingParty/ashlee_selfie.jpg" alt="Ashlee MacPhee Photo"/>
                            </Grid>
                            <Grid item>
                                <Typography variant={'subtitle1'} className={classes.subTitle}>Ashlee MacPhee</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'subtitle1'} className={classes.subTitle}>The Bride</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/*DAVE*/}
                    <Grid item>
                        <Grid item container direction={'column'} alignItems={'center'}>
                            <Grid item>
                                <img className={classes.image} src="/weddingParty/dave_selfie.jpg" alt="Dave Evans Photo"/>
                            </Grid>
                            <Grid item>
                                <Typography variant={'subtitle1'} className={classes.subTitle}>David Evans</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'subtitle1'} className={classes.subTitle}>The Groom</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            {/*WEDDING PARTY*/}
            <Grid item style={{marginTop: '3em'}}>
                <Grid item container justify={'space-around'}>
                    {/*BRIDE PARTY*/}
                    <Grid item>
                        <Grid item container direction={'column'} alignItems={'center'}>
                            <Grid item>
                                <img className={classes.image} src="/weddingParty/sherri_lynn.jpg" alt="Sherri Lynn Photo"/>
                            </Grid>
                            <Grid item>
                                <Typography variant={'subtitle1'} className={classes.subTitle}>Sherri-Lynn</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'subtitle1'} className={classes.subTitle}>Maid of honor</Typography>
                            </Grid>
                        </Grid>
                    </Grid>

                    {/*GROOM PARTY*/}
                    <Grid item>
                        <Grid item container direction={'column'} alignItems={'center'}>
                            <Grid item>
                                <img className={classes.image} src="/weddingParty/john_flynn.jpg" alt="John Flynn Photo"/>
                            </Grid>
                            <Grid item>
                                <Typography variant={'subtitle1'} className={classes.subTitle}>John Flynn</Typography>
                            </Grid>
                            <Grid item>
                                <Typography variant={'subtitle1'} className={classes.subTitle}>Best Man</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>


        </Grid>
    );
};

export default WeddingParty;