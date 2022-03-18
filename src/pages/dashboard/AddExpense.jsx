import React from "react";

import { Container } from "@mui/material";

import ExpenseForm from "~/features/dashboard/components/ExpenseForm";
import { formatFormDataForDb } from "~/features/dashboard/utils";
import { createExpense } from "~/features/dashboard/api";
import FormPageHeader from "~/features/dashboard/components/FormPageHeader";
import { useNavigate } from "react-router-dom";

function AddExpense(props) {
  const navigate = useNavigate();

  // TODO: get current month selection from context
  function handleSubmit(formData) {
    const data = formatFormDataForDb({ ...formData });

    createExpense(data)
      .then((res) => navigate("../"))
      .catch((error) => console.error(error));
  }

  return (
    <Container maxWidth="sm">
      <FormPageHeader label="Add expense" />
      <ExpenseForm
        initialValues={{ date: new Date() }}
        onSubmit={handleSubmit}
      />
    </Container>
  );
}

export default AddExpense;
