import { Typography } from "@mui/material";

function ExpenseListCardTitle({ date }) {
  return (
    <Typography variant="p" fontWeight="bold" sx={{ mb: 2 }}>
      {formatDate(date)}
    </Typography>
  );
}

export default ExpenseListCardTitle;

const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function formatDate(dateString) {
  const event = new Date(`${dateString}T00:00:00`);

  return `${monthNames[event.getMonth()]} ${event.getDate()}`;
}
