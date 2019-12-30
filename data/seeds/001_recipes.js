exports.seed = function(knex) {
  return knex('recipes')
    .truncate()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Ramen', ingredient_id: 1, quantity: 3, quantity_type: 'oz', instructions: 'Put in the microwave.'},
        {id: 2, recipe_name: 'Orange', ingredient_id: 2, quantity: 1, quantity_type: 'item', instructions: 'Peel and eat.'},
      ]);
    });
};
