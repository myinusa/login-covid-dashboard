import React from "react";
import clsx from "clsx";
import { Recovered, LastUpdated } from "../../../../api";
import PropTypes from "prop-types";
import moment from "moment";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100%"
  },
  avatar: {
    backgroundColor: colors.red[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const Budget = ({ className, ...rest }) => {
  const classes = useStyles();
  return (
    <Card className={clsx(classes.root, className)} {...rest}>
      <CardContent>
        <Grid container justify="space-between" spacing={3}>
          <Grid item>
            <Typography color="textSecondary" gutterBottom variant="h6">
              RECOVERED [GLOBAL]
            </Typography>
            <Typography color="textPrimary" variant="h3">
              <Recovered />
            </Typography>
          </Grid>
        </Grid>
        <Box mt={2} display="flex" alignItems="center">
          <Typography color="textSecondary" variant="caption">
            Last Updated <br />
            {moment(LastUpdated())
              .format("dddd, MMMM Do YYYY")
              .toString()}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

Budget.propTypes = {
  className: PropTypes.string
};

export default Budget;
