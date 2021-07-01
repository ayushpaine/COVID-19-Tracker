import numeral from "numeral";
import React from "react";

export const statStyle = (stat) =>
  stat ? `${numeral(stat).format("0.0a")}` : `+0`;
