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
  logo: {
    [theme.breakpoints.down("xs")]: {
      width: "15em",
    },
  },
  gritmillImage: {
    borderRadius: 5,
    width: "40em",
    [theme.breakpoints.down("md")]: {
      width: "30em",
    },
    [theme.breakpoints.down("xs")]: {
      width: "25em",
    },
  },
}));

const Venue = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container alignItems={"center"} direction={"column"}>
      <Grid item>
        <Grid item container justify={"center"}>
          <Grid item>
            <Typography variant={"h1"} className={classes.title}>
              The Venue
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={{ marginTop: "3em" }}>
        <img
          className={classes.logo}
          src="/venue/logo5.png"
          alt="Evins Mill Logo"
        />
      </Grid>

      <Grid item style={{ marginTop: "2em" }}>
        <img
          className={classes.gritmillImage}
          src="/venue/gritmill.jpg"
          alt="Evins Mill Grit Mill"
        />
      </Grid>

      <Grid
        item
        style={{ marginTop: "2em", paddingLeft: "3em", paddingRight: "3em" }}
      >
        <Grid item container direction={"column"} spacing={2}>
          <Grid item>
            <Typography variant={"body1"}>
              Evins Mill is a scenic Tennessee resort property located near the
              town of Smithville - just over an hour east of Nashville. Minutes
              from Center Hill Lake, Evins Mill has been hosting special events
              since 1994, and is a tranquil, open-arms venue for destination
              weddings, outdoor or covered ceremonies, receptions, rehearsal
              dinners and other special events.
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant={"body1"}>
              A designated Tennessee State Natural Area and nestled among the
              forested bluffs and meandering streams of Tennessee’s Highland Rim
              and Cumberland Plateau, Evins Mill is an inspiring resort
              destination for a variety of occasions.
            </Typography>
          </Grid>

          <Grid item>
            <Typography variant={"body1"}>
              Evins Mill provides all the amenities of a luxury destination in
              the intimate setting of a boutique resort, including...
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={{ marginTop: "2em", paddingLeft: "3em", paddingRight: "3em" }}>
        <Grid item container direction={"column"} spacing={2}>
          <Grid item>
            <Typography variant={"body1"}>
              - breathtaking backdrops for outdoor, covered & indoor ceremonies
              and for wedding photography
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"}>
              - creek side accommodations & luxury lodging for as many as
              fifty-four guests, all with spacious decks and spectacular views ~
              ideal for out-of-town guests, family members & the wedding party
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"}>
              - warm & private spaces for group gatherings (and late-night
              shenanigans!)
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"}>
              - gourmet, locally sourced cuisine, prepared with just the right
              touch and served in just the right setting ~ perfect for
              receptions, rehearsal dinners & brunches
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"body1"}>
              - a host of recreational activities ~ billiards, table tennis,
              darts, lawn games & hiking; and nearby golfing, fishing, boating &
              canoeing
            </Typography>
          </Grid>
        </Grid>
      </Grid>

        <Grid item style={{marginTop: '2em'}}>
            <Grid item container direction={'column'} alignItems={'center'}>
                <Grid item><Typography variant={'body1'}>Evins Mill ~ A Tennessee Resort Property</Typography></Grid>
                <Grid item><Typography variant={'body1'}>1535 Evins Mill Road</Typography></Grid>
                <Grid item><Typography variant={'body1'}>Smithville, TN</Typography></Grid>
                <Grid item><Typography variant={'body1'}>37166 United States</Typography></Grid>
                <Grid item><Typography variant={'body1'}>615.269.3740</Typography></Grid>
            </Grid>

        </Grid>

    </Grid>
  );
};

export default Venue;
