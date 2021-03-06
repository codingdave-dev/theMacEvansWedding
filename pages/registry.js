import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
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

const Registry = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container alignItems={"center"} direction={"column"}>
      <Grid item>
        <Grid item container justify={"center"}>
          <Grid item>
            <Typography variant={"h1"} className={classes.title}>
              Registry
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item style={{marginTop: '4em'}}>
        <Grid item container alignItems={'center'} direction={'column'} spacing={2}>
          <Grid item><Typography variant={'subtitle1'}>View Our Registry</Typography></Grid>
          <Grid item>
            <a href="https://www.bedbathandbeyond.com/store/giftregistry/view_registry_guest.jsp?pwsToken=&eventType=Wedding&inventoryCallEnabled=true&registryId=546146213&pwsurl=&searchParam=macphee" target={'_blank'}>
              <img style={{opacity: 0.8}} src="/bbbRegistry.jpg" alt="Bed Bath & Beyond Registry" />
            </a>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Registry;
