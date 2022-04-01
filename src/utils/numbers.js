export function numberWithCommas(num) {
  return num.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function calculateExpensesSum(expenses) {
  return expenses.reduce((sum, expense) => (sum += expense.cost), 0);
}
