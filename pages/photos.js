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

const Photos = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <Grid container justify={"center"} direction={"column"}>
            <Grid item>
                <Grid item container justify={'center'}>
                    <Grid item>
                        <Typography variant={'h1'} className={classes.title}>Photos</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Photos;