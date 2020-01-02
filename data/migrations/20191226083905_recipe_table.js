exports.up = function(knex) {
  return knex.schema.createTable('ingredients', (table) => {
    table.increments()
    table.string('ingredient_name', 128).notNullable()
  })
  .createTable('recipes', (table) => {
    table.increments()
    table.string('recipe_name', 128).notNullable().unique()

    table.integer('ingredient_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('ingredients')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
    table.float('quantity').notNullable()
    table.string('quantity_type').notNullable()
    table.text('instructions').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExits('recipes')
    .dropTableIfExits('ingredients')
};