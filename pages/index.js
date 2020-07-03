import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  name: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "4em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "3em",
    },
  },
  date: {
    color: theme.palette.primary.main,
    [theme.breakpoints.down("md")]: {
      fontSize: "3em",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2em",
    },
  },
  photo: {
    borderRadius: "100%",
    width: "100%",
    opacity: 0.8,
    [theme.breakpoints.down('sm')]: {
      width: '8em'
    }
  },
  bodyText: {
    color: theme.palette.common.grey
  }
}));

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Grid container justify={"center"} direction={"column"}>
      <Grid item>
        <Grid item container direction={"column"} alignItems={"center"}>
          <Grid item>
            <Typography variant={"h1"} className={classes.name}>
              Ashlee MacPhee
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"h1"} className={classes.name}>
              and
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"h1"} className={classes.name}>
              David Evans
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        <Grid
          item
          container
          style={{ marginTop: "4em" }}
          direction={"column"}
          alignItems={"center"}
        >
          <Grid item>
            <Typography variant={"h2"} className={classes.date}>
              Save The Date
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant={"h2"} className={classes.date}>
              August 20, 2018
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item style={matchesSM ? { marginTop: "2em" } : { marginTop: "4em" }}>
        <Grid item container direction={matchesSM ? 'column' : 'row'} justify={matchesSM ? null : 'center'} alignItems={matchesSM ? 'center' : null}>
          <Grid item style={matchesSM ? { width: "90%" } : { width: "70%" }}>
            <Grid item container justify={matchesSM ? 'center' : null}>
              <Grid item lg={2} md={2}>
                <img
                  className={classes.photo}
                  src="/2ofus.jpg"
                  alt="Ashlee and Dave Photo"
                />
              </Grid>
              <Grid item lg={10} md={10} style={matchesSM ? { marginTop: "1em" } : {paddingLeft: '1em'}}>
                <Grid item container direction={"column"}>
                  <Grid item>
                    <Typography variant={"body1"} className={classes.bodyText}>
                      How did we meet, you may wonder? Well, we kind of met back
                      in the winter of 2015 when Dave stayed at the hotel I
                      worked at for the tour rehearsal of Taylor Swift’s 1989
                      Tour. I always knew the group he hung out with in the
                      hotel bar as the “Stella guys” They would usually come in
                      towards the end of the night after a day of work and just
                      hang out and have some Stella.
                    </Typography>
                  </Grid>
                  <Grid item style={{ marginTop: "2em" }}>
                    <Typography variant={"body1"} className={classes.bodyText}>
                      One of my friend's from work became friends with someone
                      on the crew and we ended up going to see a show in
                      Louisville, Kentucky. We ended up at a dive bar in
                      downtown Louisville one night in June of 2015 where we all
                      just mingled and talked to each other. Dave was talking to
                      his friend John about coming over to talk to me, and he
                      worked up the nerve. We chatted for a bit and when our
                      friend we came with disappeared , Dave and a couple of his
                      friends looked after my friend and I to make sure we got
                      back to our hotel ok. We exchanged numbers and talked
                      almost every day after that. Eventually we made plans to
                      hang out before they had a show in Lexington where Dave
                      asked me to date him. I said yes and I’m so happy we gave
                      it a chance. It was tough at first because they were
                      heading over to China and Australia , but we face-timed
                      when we could and chatted often.
                    </Typography>
                  </Grid>
                  <Grid item style={{ marginTop: "2em" }}>
                    <Typography variant={"body1"} className={classes.bodyText}>
                      Fast forward to spring of 2017 and many laughs and
                      memories. I made dinner reservations at one of our
                      favorite steakhouses in Nashville and Dave was acting
                      funny all night. He was fidgety but I didn’t really
                      notice. I made a comment about how 2 years had flown by
                      since we started talking then I turn my head and see him
                      pull a little black box out of his pocket. Que the water
                      works. He asked me to marry him to which I said “of
                      course!” and was caught so off guard and nervous that I
                      gave him my right hand instead of my left.
                    </Typography>
                  </Grid>
                  <Grid item style={{ marginTop: "2em" }}>
                    <Typography variant={"body1"} className={classes.bodyText}>
                      We are so lucky to have met each other. We have had so
                      many laughs and done so many great things together, and we
                      can’t wait to see what the future brings as husband and
                      wife.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
