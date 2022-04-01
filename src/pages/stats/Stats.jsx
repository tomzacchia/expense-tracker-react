import React, { useState, useEffect } from "react";
import _ from "lodash";

import { Card, CardContent, Container, Typography } from "@mui/material";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import { useAuth } from "~/features/auth/AuthContext";
import { getUserExpensesByYYMM } from "~/features/dashboard/api";
import { useDateYYMMContext } from "~/components/DateYYMMSelector/DateYYMMContext";
import DateYYMMSelector from "~/components/DateYYMMSelector/DateYYMMSelector";

import { numberWithCommas, calculateExpensesSum } from "~/utils/numbers";

// Resolves charts dependancy
ReactFusioncharts.fcRoot(FusionCharts, FusionTheme);
charts(FusionCharts);

const categoriesColorMap = {
  transport: "1976d2",
  food: "9c27b0",
  general: "ef5350",
  home: "2e7d32",
  shopping: "0288d1",
  payment: "ed6c02",
  eletronics: "01579b",
  gift: "1b5e20",
  default: "7b1fa2",
};

const chartConfig = {
  pieRadius: 125,
  showLabels: false,
  valuePosition: "inside",
  showValues: true,
  showLegend: false,
  legendNumColumns: 2,
  captionpadding: "0",
  decimals: "1",
  plottooltext: "$<b>$value</b> spent on <b>$label</b>",
  theme: "fusion",
};

function Stats() {
  const { user } = useAuth();
  const [expenses, setExpenses] = useState([]);
  const { date } = useDateYYMMContext();

  useEffect(() => {
    if (user) {
      getUserExpensesByYYMM(user.uid, date).then((expenses) => {
        setExpenses(expenses);
      });
    }
  }, [user, date]);

  const chartData = formatExpensesForChart(expenses);
  const expensesTotal = _.flow(
    calculateExpensesSum,
    numberWithCommas
  )(expenses);

  return (
    <Container sx={{ py: 4, height: "100%" }}>
      <DateYYMMSelector />

      <Card>
        <CardContent>
          <Typography variant="h4" fontWeight="bold">
            Total {expensesTotal || 0} $
          </Typography>
        </CardContent>
      </Card>

      {chartData && (
        <ReactFusioncharts
          type="doughnut2d"
          width="100%"
          height="350"
          dataFormat="JSON"
          dataSource={{ chart: chartConfig, data: chartData }}
        />
      )}
      {!chartData && <p> no data </p>}
    </Container>
  );
}

export default Stats;

function formatExpensesForChart(expenses) {
  const expensesSumByCategory = expenses.reduce((acc, expense) => {
    if (acc[expense.category]) acc[expense.category] += expense.cost;
    else acc[expense.category] = expense.cost;

    return acc;
  }, {});

  return Object.entries(expensesSumByCategory).map((entry) => ({
    label: entry[0],
    value: entry[1],
    color: categoriesColorMap[entry[0]] || categoriesColorMap.default,
  }));
}
