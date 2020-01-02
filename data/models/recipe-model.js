const db = require('../dbConfig')

async function getInstructions(id) {
  return await db('recipes').select('instructions').where({ id: recipe_id }).first()
}

async function getRecipes() {
  return await db('recipes').select()
}

async function getRecipeById(id) {
  return await db('recipes').where({ id }).first()
}

async function getShoppingCart(id) {
  return await db('shopping_cart').where({ id }).first()
}

async function removeRecipe(id) {
  return await db('recipes')
  .where({ id })
  .del()
}

async function removeIngredient(id) {
  return await db('ingredients')
  .where({ id })
  .del()
}

async function removeShoppingCart(id) {
  return await db('shopping_cart')
  .where({ id })
  .del()
}

module.exports = {
  getInstructions,
  getRecipes,
  getRecipeById,
  getShoppingCart,
  removeRecipe,
  removeIngredient,
  removeShoppingCart
}