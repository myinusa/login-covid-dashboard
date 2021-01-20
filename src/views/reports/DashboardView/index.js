import React from "react";
import { Container, Grid, makeStyles } from "@material-ui/core";
import Page from "src/components/Page";
import ActiveCases from "./covid/ActiveCases";
import Recovered from "./covid/Recovered";
import Death from "./covid/Death";
import Daily from "../../chart/Chart";
import Sales from "./Sales";

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: "100%",
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  // console.log(fetchData);
  const classes = useStyles();
  return (
    <Page className={classes.root} title="Dashboard">
      <Container maxWidth={false}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <ActiveCases />
          </Grid>
          <Grid item xs={4}>
            <Recovered />
          </Grid>
          <Grid item xs={4}>
            <Death />
          </Grid>
          <Grid item lg={8} md={12} xl={9} xs={12}>
            <Sales />
          </Grid>
          <Grid item lg={4} md={6} xl={3} xs={12}>
            <Daily />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
