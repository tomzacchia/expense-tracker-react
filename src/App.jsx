import { Navigate, Route, Routes } from "react-router-dom";

import appRoutes from "~/routes/appRoutes";
import publicRoutes from "~/routes/publicRoutes";
import ReloadPrompt from "./ReloadPrompt";

function App(props) {
  return (
    <>
      <Routes>
        {publicRoutes}

        {appRoutes}

        {/* TODO: 404 page */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>

      {/* register service worker */}
      <ReloadPrompt />
    </>
  );
}

export default App;
