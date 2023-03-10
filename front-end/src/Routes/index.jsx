import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { CommonUser } from "./app.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <CommonUser />
    </BrowserRouter>
  );
}
