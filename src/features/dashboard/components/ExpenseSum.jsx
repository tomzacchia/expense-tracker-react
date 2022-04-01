import React from "react";
import _ from "lodash";
import { Paper, Typography } from "@mui/material";

import { calculateExpensesSum, numberWithCommas } from "~/utils/numbers";

function ExpenseSum({ expenses }) {
  const totalExpenses = _.flow(
    calculateExpensesSum,
    numberWithCommas
  )(expenses);

  return (
    <>
      <Paper
        sx={{
          px: 4,
          height: "150px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "black",
          borderRadius: "32px",
          color: "white",
        }}
        elevation={6}
      >
        <Typography variant="h4" fontWeight="bold">
          Total
        </Typography>
        <Typography variant="h4" fontWeight="bold">
          $ {totalExpenses}
        </Typography>
      </Paper>
    </>
  );
}

export default ExpenseSum;
