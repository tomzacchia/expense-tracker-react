import { Outlet, Route } from "react-router-dom";

import { DateYYMMProvider } from "~/components/DateYYMMSelector/DateYYMMContext";
import Dashboard from "~/pages/dashboard/Dashboard";
import AddExpense from "~/pages/dashboard/AddExpense";
import EditExpense from "~/pages/dashboard/EditExpense";

export const dashboardRoutes = (
  <Route
    path="dashboard"
    element={
      <DateYYMMProvider>
        <Outlet />
      </DateYYMMProvider>
    }
  >
    <Route index element={<Dashboard />} />
    <Route path="edit-expense" element={<EditExpense />} />
    <Route path="add-expense" element={<AddExpense />} />
  </Route>
);
