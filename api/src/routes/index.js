const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
let recipeRouter = require("./recipeRouter")
let dietRouter = require("./dietRouter")
const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/recipes", recipeRouter)
router.use("/diets", dietRouter)
// router.use("/diets", dietRouter)
module.exports = router;

