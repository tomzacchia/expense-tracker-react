import { addLeadingZeroToMonth } from "~/utils/date";

export function formatFormDataForDb(formData) {
  const date = new Date(formData.date);

  formData.cost = +formData.cost;
  formData.date = `${date.getUTCFullYear()}-${addLeadingZeroToMonth(
    date.getUTCMonth() + 1
  )}-${date.getUTCDate()}`;

  return formData;
}

export function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
