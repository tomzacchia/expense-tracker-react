import React from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Container, Button } from "@mui/material";

import { formatFormDataForDb } from "~/features/dashboard/utils";
import { deleteExpense, updateExpense } from "~/features/dashboard/api";
import FormPageHeader from "~/features/dashboard/components/FormPageHeader";
import ExpenseForm from "~/features/dashboard/components/ExpenseForm";

function EditExpense(props) {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  function submitHandler(formData) {
    const data = formatFormDataForDb(formData);

    updateExpense(data)
      .then(() => navigate("../"))
      .catch((error) => console.error(error));
  }

  function handleDelete() {
    const { id: expenseId } = Object.fromEntries(searchParams);

    deleteExpense(expenseId)
      .then(() => navigate("../"))
      .catch((error) => console.error(error));
  }

  const expense = formatExpenseForForm({ ...Object.fromEntries(searchParams) });

  if (!expense) return <h1>No expense</h1>;

  return (
    <Container maxWidth="sm">
      <FormPageHeader label="Edit Expense" />
      <ExpenseForm initialValues={expense} onSubmit={submitHandler} />
      <Button
        onClick={handleDelete}
        variant="contained"
        color="error"
        sx={{ mt: 4, width: "100%" }}
      >
        Delete
      </Button>
    </Container>
  );
}

export default EditExpense;

function formatExpenseForForm(expense) {
  expense.cost = parseFloat(expense.cost);
  expense.date = new Date(`${expense.date}T00:00:00`);

  return expense;
}
