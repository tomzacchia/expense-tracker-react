import React from "react";
import { Link } from "react-router-dom";
import { Grid, Typography, Container, Button } from "@mui/material";
import styles from "./homepage.module.css";
import logo from "~/../public/pwa-192x192.png";
// import Cards from "./Cards";

import CreditCardIcon from "@mui/icons-material/CreditCard";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";

function HomePage(props) {
  return (
    <div>
      <Container
        maxWidth="sm"
        sx={{ mb: "80px", height: "10vh", position: "relative" }}
        classes={{ root: styles["bg-secondary-gradient"] }}
      >
        <img className={styles["logo-image"]} src={logo} />
      </Container>

      <Grid container direction="column" alignItems="center">
        <Grid sx={{ mb: 2 }}>
          <Typography variant="h4" textAlign="center" fontWeight="100">
            Welcome to
          </Typography>
          <Typography variant="h4" textAlign="center" fontWeight="bold">
            Budgety
          </Typography>
        </Grid>

        {/* Introduction cards */}
        <Cards />

        <Button
          variant="contained"
          classes={{ root: styles["bg-secondary-gradient"] }}
          sx={{
            mx: "auto",
            mb: 2,
            py: 2,
            width: "80%",
            fontWeight: "bold",
            display: "block",
            borderRadius: "24px",
            textAlign: "center",
          }}
          href="auth/signup"
        >
          {"get started".toUpperCase()}
        </Button>

        <Link
          style={{
            paddingTop: "15px",
            paddingBottom: "15x",
            textDecoration: "none",
            display: "block",
            textAlign: "center",
            color: "grey",
          }}
          to="auth/login"
        >
          {"already a member?".toUpperCase()}
        </Link>
      </Grid>
    </div>
  );
}

export default HomePage;

function Cards(props) {
  return <Container>{getCardsMarkup()}</Container>;
}

function getCardsMarkup() {
  return cardsData.map(({ title, description, Component }) => (
    <Grid key={title} container sx={{ mb: 4, width: "80vw" }}>
      <Grid
        item
        xs={3}
        sx={{ display: "flex" }}
        justifyContent="center"
        alignItems="center"
      >
        <Typography variant="h4">
          <Component fontSize="large" sx={{ color: "secondary.dark" }} />
        </Typography>
      </Grid>
      <Grid item xs={9}>
        <Typography fontWeight="700">{title.toUpperCase()}</Typography>
        <Typography>{capitalizeFirstChar(description)}</Typography>
      </Grid>
    </Grid>
  ));
}

function capitalizeFirstChar(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const cardsData = [
  {
    Component: CreditCardIcon,
    title: "track your spendings",
    description: "see how you spend your money.",
  },
  {
    Component: DonutSmallIcon,
    title: "analyze your budget",
    description: "make a budget that works for you!",
  },
  {
    Component: HistoryEduIcon,
    title: "learn from others",
    description: "gain insights from experienced savers!",
  },
];
