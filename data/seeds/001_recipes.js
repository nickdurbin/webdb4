exports.seed = function(knex) {
  return knex('recipes')
    .truncate()
    .then(function () {
      return knex('recipes').insert([
        {id: 1, recipe_name: 'Ramen', quantity: 3, quantity_type: 'oz', instructions: 'Put in the microwave.'},
        {id: 2, recipe_name: 'Orange', quantity: 1, quantity_type: 'Orange', instructions: 'Peel and eat.'},
      ]);
    });
};
