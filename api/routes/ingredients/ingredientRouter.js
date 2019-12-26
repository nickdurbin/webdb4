const express = require('express')
const router = express.Router()
const Ingredients = require('../../../data/helpers/IngredientHelpers')

router.get("/", (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.get("/:id", (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.post("/", (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.put("/:id", (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

router.delete("/:id", (req, res, next) => {
  try {

  } catch (err) {
    next(err)
  }
})

module.exports = router