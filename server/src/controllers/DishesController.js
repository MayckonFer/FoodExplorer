const knex = require("../database/knex");

class DishesController {
  async create(request, response) {
    const { title, description, tags, price, category, avatar } = request.body;
    const { user_id } = request.params;

    const dishes_id = await knex("dishes").insert({
      title,
      description,
      price,
      category,
      avatar,
      user_id,
    });

    const tagsInsert = tags.map((name) => {
      return {
        dishes_id,
        name,
        user_id,
      };
    });

    await knex("tags").insert(tagsInsert);

    response.json();
  }

  async show(request, response) {
    const { id } = request.params;

    const dishe = await knex("dishes").where({ id }).first();
    const tags = await knex("tags").where({ dishes_id: id }).orderBy("name");

    return response.json(dishe);
  }

  async delete(request, response) {
    const { id } = request.params;

    await knex("dishes").where({ id }).delete();

    return response.json();
  }
}

module.exports = DishesController;
