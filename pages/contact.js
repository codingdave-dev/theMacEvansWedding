import React from 'react';
import {makeStyles, useTheme} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import {Field, reduxForm} from "redux-form";
import TextInput from "../src/common/form/TextInput";
import Button from "@material-ui/core/Button";
import {contactUs} from "../src/store/actions/contactActions/contactActions";
import {connect} from "react-redux";
import TextArea from "../src/common/form/TextArea";

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
    form: {
        width: '50%',
        [theme.breakpoints.down('sm')]: {
            width: '80%'
        }
    }
}));

const actions = {
    contactUs
}

const Contact = ({contactUs, handleSubmit, error, submitting}) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container justify={"center"} direction={"column"}>
            <Grid item>
                <Grid item container justify={'center'}>
                    <Grid item>
                        <Typography variant={'h1'} className={classes.title}>Contact</Typography>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid item container justify={'center'}>
                    <Grid item className={classes.form}>
                        <form autoComplete={"off"} onSubmit={handleSubmit(contactUs)}>
                            <Grid container direction={"column"} className={classes.loginContainer}>
                                <Grid item style={{ marginTop: "1em" }}>
                                    <Field
                                        label={"Name"}
                                        name={"name"}
                                        type={'text'}
                                        variant={"outlined"}
                                        component={TextInput}
                                    />
                                </Grid>
                                <Grid item style={{ marginTop: "1.5em" }}>
                                    <Field
                                        label={"Email Address"}
                                        name={"email"}
                                        type={'text'}
                                        variant={"outlined"}
                                        component={TextInput}
                                    />
                                </Grid>
                                <Grid item style={{ marginTop: "1.5em" }}>
                                    <Field
                                        label={"Message"}
                                        name={"message"}
                                        type={'text'}
                                        variant={"outlined"}
                                        component={TextArea}
                                        rows={10}
                                    />
                                </Grid>
                                {error &&
                                <Grid item style={{marginTop: '0.5em'}} >
                                    <Typography variant={'subtitle1'} className={classes.error}>{error}</Typography>
                                </Grid>
                                }

                                <Grid item style={{ marginTop: "1.2em", marginBottom: "1.2em" }}>
                                    <Button variant="outlined" color="primary" fullWidth type={'submit'} disabled={submitting}>
                                        Send Message
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>
                    </Grid>
                </Grid>
            </Grid>



        </Grid>
    );
};

export default connect(null, actions) (reduxForm({ form: "contactForm" }) (Contact));