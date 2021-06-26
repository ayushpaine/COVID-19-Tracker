import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function Stats({ title, cases, total }) {
  return (
    <Card className="statCard">
      <CardContent>
        <Typography color="textSecondary" className="statTitle">
          {title}
        </Typography>
        <h2 className="statCases"> {cases} </h2>
        <Typography color="textSecondary" className="statTotal">
          {total}
          Total
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Stats;
