const { Router } = require("express");

const usersRouter = require("./users.routes");
const disheRouter = require("./dishes.routes");

const routes = Router();

routes.use("/users", usersRouter);
routes.use("/dishes", disheRouter);

module.exports = routes;
