const express = require("express")
const dietRouter = express.Router()
// const {Op} = require("sequelize")çç
const { Diet} = require("../db");

dietRouter.get("/", async (req, res) => { 
  try {
    const diets = await Diet.findAll();
    res.status(200).json(diets.map(diet => diet.name));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
})

module.exports = dietRouter