import React from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { Paper, Grid, Typography } from "@mui/material";

import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import HomeIcon from "@mui/icons-material/Home";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CardGiftcardIcon from "@mui/icons-material/CardGiftcard";

import styles from "./ExpenseItem.module.css";

function ExpenseItem({ description, category, cost, date, id }) {
  const navigate = useNavigate();

  const params = { description, category, cost, date, id };

  function handleClick() {
    navigate({
      pathname: "edit-expense",
      search: `?${createSearchParams(params)}`,
    });
  }

  return (
    <Grid
      container
      onClick={handleClick}
      classes={{ root: styles.gridRoot }}
      sx={{ mt: 2 }}
    >
      <Grid item xs={2}>
        <Paper
          classes={{ root: styles.paperRoot }}
          sx={{ backgroundColor: "secondary.dark" }}
        >
          {iconFactoryByType(category)}
        </Paper>
      </Grid>
      <Grid item xs={8} sx={{ pl: 4 }}>
        <Typography fontWeight="bold">{category}</Typography>
        <Typography>{description}</Typography>
      </Grid>
      <Grid item xs={2}>
        <Typography fontWeight="bold">$ {cost}</Typography>
      </Grid>
    </Grid>
  );
}

export default ExpenseItem;

function iconFactoryByType(type) {
  let element = "";

  switch (type) {
    case "transport":
      element = DirectionsCarIcon;
      break;
    case "food":
      element = LocalDiningIcon;
      break;
    case "general":
      element = LocalOfferIcon;
      break;
    case "home":
      element = HomeIcon;
      break;
    case "shopping":
      element = ShoppingCartIcon;
      break;
    case "payment":
      element = CreditCardIcon;
      break;
    case "phone":
      element = PhoneIphoneIcon;
      break;
    case "gift":
      element = CardGiftcardIcon;
      break;
    default:
      element = LocalOfferIcon;
      break;
  }

  return React.createElement(element, { style: { color: "white" } });
}
