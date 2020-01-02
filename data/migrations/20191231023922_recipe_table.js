exports.up = function(knex) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments()
    table.string('ingredient_name', 128)
      .notNullable()
      .unique()
  })
  .createTable('shopping_cart', (table) => {
    table.increments()
    
    table.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.float('quantity').notNullable()
    table.string('quantity_type').notNullable()
  })
  .createTable('recipes', (table) => {
    table.increments()
    table.string('recipe_name', 128)
      .notNullable()
      .unique()

    table.integer('shopping_cart_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('shopping_cart')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.text('instructions').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('recipes')
    .dropTableIfExists('shopping_cart')
    .dropTableIfExists('ingredients')
};