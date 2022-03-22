import {
  FormControl,
  FormLabel,
  Input,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Controller, useForm } from "react-hook-form";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { Button } from "@mui/material";

import { capitalizeFirstLetter } from "../utils";

const categories = [
  "transport",
  "food",
  "general",
  "home",
  "shopping",
  "payment",
  "phone",
  "gift",
];

function ExpenseForm({ initialValues = {}, onSubmit }) {
  const { handleSubmit, control } = useForm({ defaultValues: initialValues });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{
        marginTop: "2rem",
        height: "500px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Controller
        name="cost"
        control={control}
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl>
            <FormLabel htmlFor="cost" xs={{ fontWeight: "bold" }}>
              Cost
            </FormLabel>
            <Input
              xs={{ fontSize: "2rem", fontWeight: "bold" }}
              id="cost"
              type="number"
              inputProps={{ step: "any", inputMode: "decimal" }}
              inputMode="numeric"
              value={value}
              onChange={onChange}
              placeholder="Add cost"
              error={!!error}
            />
          </FormControl>
        )}
      />

      <Controller
        name="date"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({
          field: { onChange, value },
          fieldState: { error: dateError },
        }) => (
          <FormControl>
            <FormLabel htmlFor="date">Date</FormLabel>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                id="date"
                openTo="day"
                views={["year", "month", "day"]}
                value={value}
                onChange={onChange}
                renderInput={(params) => (
                  <TextField {...params} error={!!dateError} />
                )}
              />
            </LocalizationProvider>
          </FormControl>
        )}
      />

      <Controller
        name="category"
        control={control}
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl>
            <FormLabel htmlFor="category" xs={{ fontWeight: "bold" }}>
              Category
            </FormLabel>
            <Select
              id="category"
              defaultValue="general"
              onChange={onChange}
              value={value}
              variant="standard"
              placeholder="category"
              error={!!error}
            >
              {categories.map((category) => (
                <MenuItem key={category} value={category}>
                  {capitalizeFirstLetter(category)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        )}
      />

      <Controller
        name="description"
        control={control}
        defaultValue=""
        rules={{
          required: true,
        }}
        render={({ field: { onChange, value }, fieldState: { error } }) => (
          <FormControl>
            <FormLabel htmlFor="description" xs={{ fontWeight: "bold" }}>
              Description
            </FormLabel>
            <Input
              xs={{ fontWeight: "bold" }}
              id="description"
              type="text"
              value={value}
              onChange={onChange}
              placeholder="Add description..."
              error={!!error}
            />
          </FormControl>
        )}
      />

      <Button
        variant="contained"
        color="secondary"
        sx={{ py: 1 }}
        type="subimt"
      >
        save
      </Button>
    </form>
  );
}

export default ExpenseForm;
