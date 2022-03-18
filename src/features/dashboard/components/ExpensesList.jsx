import _ from "lodash";
import { Grid } from "@mui/material";
import ExpenseItem from "./ExpenseItem";
import ExpenseListCardTitle from "./ExpenseListCardTitle";

function ExpensesList({ expenses }) {
  if (!expenses || expenses.length === 0) return null;

  const expensesGroupedByDate = _.groupBy(expenses, "date");
  const datesArr = Object.keys(expensesGroupedByDate);

  return datesArr.map((date) => (
    <Grid sx={{ mb: 4 }} key={date}>
      <ExpenseListCardTitle date={date} />
      {expensesGroupedByDate[date].map((expense) => (
        <ExpenseItem key={expense.id} {...expense} />
      ))}
    </Grid>
  ));
}

export default ExpensesList;
