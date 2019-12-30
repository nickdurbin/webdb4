const db = require('../dbConfig')

async function getInstructions(id) {
  return await db('recipe').select('instructions').where({ id: recipe_id }).first()
}

async function getRecipes() {
  return await db('recipes')
}

async function getRecipeById(id) {
  return await db('recipes').where({ id }).first()
}

async function getShoppingList(id) {
  return await db('recipes')
}


module.exports = {
  getInstructions,
  getRecipes,
  getRecipeById,
  getShoppingList
}