const ingredientRoutes = require('./ingredients/ingredientRouter')
const recipeRoutes = require('./recipes/recipeRouter')

module.exports = server => {
  server.use("/api/recipes", recipeRoutes)
  server.use("/api/ingredients", ingredientRoutes)
}