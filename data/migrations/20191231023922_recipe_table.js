exports.up = function(knex) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments()
    table.string('ingredient_name', 128)
      .notNullable()
      .unique()
  })
  .createTable('recipes', (table) => {
    table.increments()
    table.string('recipe_name', 128)
    .notNullable()
    .unique()
    
    table.float('quantity').notNullable()
    table.string('quantity_type').notNullable()
    table.text('instructions').notNullable()
  })
  .createTable('shopping_cart', (table) => {
    table.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')

    table.integer('recipe_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('recipes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    
    table.primary(['ingredient_id', 'recipe_id']);
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('shopping_cart')
    .dropTableIfExists('recipes')
    .dropTableIfExists('ingredients')
};