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
    },
}));

const Rsvp = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container alignItems={"center"} direction={"column"}>
            <Grid item>
                <Grid item container justify={'center'}>
                    <Grid item>
                        <Typography variant={'h1'} className={classes.title}>RSVP</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item style={{marginTop: '2em'}}>
                <Typography variant={'subtitle1'} className={classes.subTitle}>Ashlee MacPhee</Typography>
            </Grid>
            <Grid item >
                <Typography variant={'subtitle1'} className={classes.subTitle}>and</Typography>
            </Grid>
            <Grid item >
                <Typography variant={'subtitle1'} className={classes.subTitle}>David Evans</Typography>
            </Grid>
            <Grid item style={{marginTop: '3em'}}>
                <Typography variant={'subtitle1'} className={classes.subTitle} align={'center'}>Request the pleasure of your company at their wedding on</Typography>
            </Grid>
            <Grid item >
                <Typography variant={'subtitle1'} className={classes.subTitle}>August 20th 2018</Typography>
            </Grid>
            <Grid item style={{marginTop: '1em'}}>
                <Typography variant={'subtitle1'} className={classes.subTitle}>@</Typography>
            </Grid>
            <Grid item style={{marginTop: '1em'}}>
                <Typography variant={'subtitle1'} className={classes.subTitle} align={'center'}>Evins Mill Resort</Typography>
                <Typography variant={'subtitle1'} className={classes.subTitle} align={'center'}>1535 Evins Mill Road</Typography>
                <Typography variant={'subtitle1'} className={classes.subTitle} align={'center'}>Smithville, TN</Typography>
            </Grid>
            <Grid item style={{marginTop: '3em'}}>
                <Typography variant={'subtitle1'} className={classes.subTitle} align={'center'}>Enter the details found on your invitation below.</Typography>
            </Grid>
        </Grid>
    );
};

export default Rsvp;