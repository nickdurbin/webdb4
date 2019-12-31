exports.seed = function(knex) {

  return knex('shopping_cart')
    .truncate()
    .then(function () {
      return knex('shopping_cart').insert([
        {id: 1, ingredient_id: 1, quantity: 3, quantity_type: 'oz'},
        {id: 2, ingredient_id: 2, quantity: 1, quantity_type: 'Orange'},
    ]);
  });
};