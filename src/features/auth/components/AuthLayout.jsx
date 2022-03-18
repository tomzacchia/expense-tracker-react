import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";

function AuthLayout(props) {
  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      sx={{ height: "100vh" }}
    >
      <Grid item xs={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
}

export default AuthLayout;
