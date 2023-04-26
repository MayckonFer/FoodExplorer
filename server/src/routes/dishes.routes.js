const { Router } = require("express");

const DishesController = require("../controllers/DishesController");

const disheRouter = Router();

const dishesController = new DishesController();

disheRouter.post("/:user_id", dishesController.create);
disheRouter.get("/:id", dishesController.show);
disheRouter.delete("/:id", dishesController.delete);

module.exports = disheRouter;
