import { Input } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";

import { useDateYYMMContext } from "./DateYYMMContext";

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
  const { date, setDate } = useDateYYMMContext();

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

export default DateYYMMSelector;
