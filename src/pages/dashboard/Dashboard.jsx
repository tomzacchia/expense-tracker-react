import { useAuth } from "~/features/auth/AuthContext";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { LocalizationProvider, DatePicker } from "@mui/lab";
import {
  Input,
  Container,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { useDashboardContext } from "~/features/dashboard/DashboardContext";
import ExpenseSum from "~/features/dashboard/components/ExpenseSum";
import ExpensesList from "~/features/dashboard/components/ExpensesList";
import { getUserExpensesByYYMM } from "~/features/dashboard/api";

function Dashboard(props) {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { date } = useDashboardContext();

  useEffect(() => {
    if (user) {
      getUserExpensesByYYMM(user.uid, date).then((expenses) => {
        setExpenses(expenses);
        setIsLoading(false);
      });
    }
  }, [user, date]);

  let mainContent = (
    <CircularProgress
      sx={{ position: "fixed", top: "50%", left: "50%", marginLeft: "-20px" }}
    />
  );

  const noDataForDate = !isLoading && expenses.length === 0;
  const dataExistsForDate = !isLoading && expenses.length > 0;

  if (noDataForDate) {
    mainContent = (
      <Typography variant="h5">
        Add an expense to start tracking spendings!
      </Typography>
    );
  }

  if (dataExistsForDate) {
    mainContent = <ExpensesList expenses={expenses} />;
  }

  return (
    <Container maxWidth="sm" sx={{ height: "100%" }}>
      <div
        style={{
          paddingTop: "30px",
          height: "250px",
          boxSizing: "border-box",
        }}
      >
        <DateYYMMSelector />
        <ExpenseSum expenses={expenses} />
      </div>
      <div
        style={{
          paddingTop: "1rem",
          boxSizing: "border-box",
          height: "calc(100% - 250px)",
          overflow: "scroll",
        }}
      >
        {mainContent}
      </div>

      <LinkToAddExpenseButton />
    </Container>
  );
}

export default Dashboard;

function LinkToAddExpenseButton() {
  return (
    <Button
      variant="contained"
      sx={{
        padding: 0,
        minWidth: "50px",
        height: "50px",
        position: "fixed",
        bottom: "85px",
        right: "25px",
        borderRadius: "50%",
        display: "flex",
        backgroundColor: "black",
      }}
      component={Link}
      to="add-expense"
    >
      <AddIcon />
    </Button>
  );
}

const inputStyle = {
  width: 150,
  backgroundColor: "#eeeeee",
  borderRadius: 14,
  "& .MuiInput-input": {
    py: 1,
    textAlign: "center",
    fontWeight: "bold",
  },
};

function DateYYMMSelector() {
  const { date, setDate } = useDashboardContext();

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        autoOk={false}
        views={["year", "month"]}
        value={date}
        minDate={new Date("2021-01-01")}
        maxDate={new Date("2026-01-01")}
        inputFormat="MMM yyyy"
        openTo="month"
        ToolbarComponent={() => <div></div>}
        onChange={(newValue) => {
          setDate(newValue);
        }}
        renderInput={({ inputRef, inputProps, InputProps }) => (
          <div
            style={{
              marginBottom: "16px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Input
              sx={inputStyle}
              size="small"
              disableUnderline={true}
              ref={inputRef}
              {...inputProps}
            />
          </div>
        )}
      />
    </LocalizationProvider>
  );
}
