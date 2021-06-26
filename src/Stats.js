import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    background: "#ffffff",
    border: 0,
    borderRadius: 6,
    height: 120,
    width: 220,
    boxShadow: " -5px 3px 82px -6px rgba(	144, 202, 249,0.);",
  },
});

function Stats({ title, cases, total, value }) {
  const classes = useStyles();
  return (
    <Card className="statCard">
      <CardContent className={classes.root}>
        <Typography color="textSecondary" className="statTitle">
          {title}
        </Typography>
        <h2 className="statCases"> +{cases} </h2>
        <Typography color="textPrimary" className="statTotal">
          {total} Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Stats;
