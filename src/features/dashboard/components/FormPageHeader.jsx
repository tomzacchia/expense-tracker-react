import { Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

function FormPageHeader({ label }) {
  return (
    <div style={{ marginTop: "2rem", display: "flex", alignItems: "baseline" }}>
      <Button color="secondary" component={Link} to="/app/dashbaord">
        CLOSE
      </Button>
      <Typography variant="h5" fontWeight="bold" sx={{ ml: 4 }}>
        {label}
      </Typography>
    </div>
  );
}

export default FormPageHeader;
