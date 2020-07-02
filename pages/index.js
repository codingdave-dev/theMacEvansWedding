import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  // STYLES HERE
}));

const Index = () => {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container>
      <Grid item>INDEX</Grid>
    </Grid>
  );
};

export default Index;
