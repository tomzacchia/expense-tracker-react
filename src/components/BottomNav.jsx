import { matchPath, Link, useLocation } from "react-router-dom";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import ViewListIcon from "@mui/icons-material/ViewList";
import PieChartIcon from "@mui/icons-material/PieChart";
import PersonIcon from "@mui/icons-material/Person";

/**
 *
 * @param {*} patterns | Strings[]
 */
function useRouteMatch(patterns) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i++) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname);

    if (possibleMatch !== null) {
      // console.log("possible match: ", possibleMatch);
      return possibleMatch;
    }
  }

  return null;
}

const activeNavStyle = {
  "&.Mui-selected > svg": {
    color: "secondary.dark",
  },
  "&.Mui-selected": {
    color: "secondary.dark",
  },
};

const DASHBOARD_ROUTE = "/app/dashboard";
const PROFILE_ROUTE = "/app/profile";
const STATS_ROUTE = "/app/stats";

function BottomNav() {
  const routeMatch = useRouteMatch([
    STATS_ROUTE,
    PROFILE_ROUTE,
    DASHBOARD_ROUTE,
  ]);
  const currentTab = routeMatch?.pattern?.path || DASHBOARD_ROUTE;

  return (
    <BottomNavigation
      showLabels
      sx={{
        pb: 2,
        width: "100vw",
        position: "fixed",
        bottom: "0",
        borderTop: "solid thin gainsboro",
      }}
      value={currentTab}
    >
      <BottomNavigationAction
        sx={activeNavStyle}
        label="Expenses"
        value={DASHBOARD_ROUTE}
        icon={<ViewListIcon />}
        component={Link}
        to={DASHBOARD_ROUTE}
      />
      <BottomNavigationAction
        sx={activeNavStyle}
        label="Stats"
        value={STATS_ROUTE}
        icon={<PieChartIcon />}
        component={Link}
        to={STATS_ROUTE}
      />
      <BottomNavigationAction
        sx={activeNavStyle}
        label="Profile"
        value={PROFILE_ROUTE}
        icon={<PersonIcon />}
        component={Link}
        to={PROFILE_ROUTE}
      />
    </BottomNavigation>
  );
}

export default BottomNav;
