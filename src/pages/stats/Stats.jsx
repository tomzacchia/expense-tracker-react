import React, { useState, useEffect } from "react";
import _ from "lodash";
import FusionCharts from "fusioncharts";
import charts from "fusioncharts/fusioncharts.charts";
import ReactFusioncharts from "react-fusioncharts";
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

import { useAuth } from "~/features/auth/AuthContext";
import { getUserExpensesByYYMM } from "~/features/dashboard/api";

// Resolves charts dependancy
ReactFusioncharts.fcRoot(FusionCharts, FusionTheme);
charts(FusionCharts);

const dataSource = {
  chart: {
    pieRadius: 125,
    showLabels: false,
    valuePosition: "inside",
    showValues: true,
    showLegend: true,
    legendNumColumns: 2,
    captionpadding: "0",
    decimals: "1",
    plottooltext: "<b>$percentValue</b> spent on <b>$label</b>",
    theme: "fusion",
  },
  // data: [ {label: String, value: ...} ]
};

function Stats() {
  const { user } = useAuth();
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (user) {
      getUserExpensesByYYMM(user.uid, new Date()).then((expenses) => {
        const chartData = formatExpensesForChart(expenses);

        setChartData(chartData);
      });
    }
  }, [user]);
  return (
    <>
      {chartData && (
        <ReactFusioncharts
          type="doughnut2d"
          width="100%"
          height="500"
          dataFormat="JSON"
          dataSource={{ ...dataSource, data: chartData }}
        />
      )}
      {!chartData && <p> no data </p>}
    </>
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
  }));
}
