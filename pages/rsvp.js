import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import {connect} from "react-redux";
import {Field, reduxForm} from "redux-form";
import TextInput from "../src/common/form/TextInput";
import Button from "@material-ui/core/Button";
import {getRSVPDetails} from "../src/store/actions/rsvpActions/rsvpActions";

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

const actions = {
    getRSVPDetails
}

const Rsvp = ({getRSVPDetails, handleSubmit, error, submitting}) => {
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



            {/*RSVP FORM*/}
            <Grid item>
                <form autoComplete={"off"} onSubmit={handleSubmit(getRSVPDetails)}>
                    <Grid container direction={"column"} className={classes.loginContainer}>
                        <Grid item style={{ marginTop: "1em" }}>
                            <Field
                                label={"Guest ID"}
                                name={"guestID"}
                                type={'text'}
                                variant={"outlined"}
                                component={TextInput}
                            />
                        </Grid>
                        <Grid item style={{ marginTop: "1.5em" }}>
                            <Field
                                label={"Access Code"}
                                name={"accessCode"}
                                type={'text'}
                                variant={"outlined"}
                                component={TextInput}
                            />
                        </Grid>
                        {error &&
                        <Grid item style={{marginTop: '0.5em'}} >
                            <Typography variant={'subtitle1'} className={classes.error}>{error}</Typography>
                        </Grid>
                        }

                        <Grid item style={{ marginTop: "1.2em", marginBottom: "1.2em" }}>
                            <Button variant="outlined" color="primary" fullWidth type={'submit'} disabled={submitting}>
                                RSVP
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    );
};

export default connect(null, actions) (reduxForm({ form: "rsvpForm" }) (Rsvp));