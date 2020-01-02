exports.seed = function(knex) {

  return knex('shopping_cart')
    .truncate()
    .then(function () {
      return knex('shopping_cart').insert([
        {ingredient_id: 1, recipe_id: 1},
        {ingredient_id: 2, recipe_id: 2},
    ]);
  });
};