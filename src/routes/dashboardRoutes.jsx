import { Outlet, Route } from "react-router-dom";

import { DashboardContextProvider } from "~/features/dashboard/DashboardContext";
import Dashboard from "~/pages/dashboard/Dashboard";
import AddExpense from "~/pages/dashboard/AddExpense";
import EditExpense from "~/pages/dashboard/EditExpense";

export const dashboardRoutes = (
  <Route
    path="dashboard"
    element={
      <DashboardContextProvider>
        <Outlet />
      </DashboardContextProvider>
    }
  >
    <Route index element={<Dashboard />} />
    <Route path="edit-expense" element={<EditExpense />} />
    <Route path="add-expense" element={<AddExpense />} />
  </Route>
);
