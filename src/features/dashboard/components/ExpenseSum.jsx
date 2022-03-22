import React from "react";
import { Box, Container, Paper, Typography } from "@mui/material";

function ExpenseSum({ expenses }) {
  const sum = calculateSum(expenses);
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
          $ {numberWithCommas(sum)}
        </Typography>
      </Paper>
    </>
  );
}

export default ExpenseSum;

function calculateSum(expenses) {
  return expenses.reduce((sum, expense) => (sum += expense.cost), 0);
}

function numberWithCommas(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
