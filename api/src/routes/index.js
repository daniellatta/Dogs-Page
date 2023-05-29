const { Router } = require('express');
const getAllDogs = require('../handlers/getAllDogs');
const getDogById = require('../handlers/getDogById');
const getDogsByBreed = require('../handlers/getDogsByBreed');
const postNewDog = require('../handlers/postNewDog');
const getAllTemperaments = require('../handlers/getAllTemperaments');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router
  .get('/dogs/name', getDogsByBreed)
  .get('/dogs/:id', getDogById)
  .get('/dogs', getAllDogs)
  .post('/dogs', postNewDog)
  .get('/temperaments', getAllTemperaments);

module.exports = router;
