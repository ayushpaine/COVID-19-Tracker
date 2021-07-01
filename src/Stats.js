import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./Stats.css";

const useStyles = makeStyles({
  root: {
    background: "#ffffff",
    border: 0,
    borderRadius: 6,
    height: 100,
    width: 200,
    boxShadow: " -5px 3px 82px -6px rgba(	144, 202, 249,0.);",
  },
});

function Stats({
  title,
  cases,
  total,
  onClick,
  active,
  isGrey,
  isGreen,
  isRed,
}) {
  const classes = useStyles();
  return (
    <Card
      className={`statCard 
      ${active && "statChange"}
      `}
      onClick={onClick}
    >
      <CardContent className={classes.root}>
        <div
          className={`
      ${active && "div-Change"}
      `}
        >
          <Typography color="textSecondary" className="statTitle">
            {title}
          </Typography>
          <h1
            className={`statCases ${!isGrey && !isRed && "statGreen"}
           ${!isGrey && !isGreen && "statRed"}`}
            style={{ font: `16px` }}
          >
            +{cases}
          </h1>
          <Typography color="textPrimary" className="statTotal">
            +{total} Total
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}

export default Stats;
