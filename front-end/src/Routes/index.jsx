import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";
import { CommonUser } from "./app.routes";
import { Admin } from "./admin.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <Admin />
    </BrowserRouter>
  );
}
