exports.seed = function(knex) {
  return knex('recipes')
    .truncate()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Ramen', shopping_cart_id: 1, instructions: 'Put in the microwave.'},
        {id: 2, recipe_name: 'Orange', shopping_cart_id: 2, instructions: 'Peel and eat.'},
      ]);
    });
};
