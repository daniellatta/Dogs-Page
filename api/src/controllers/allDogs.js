require('dotenv').config();
const { endpoint, api_key } = process.env;
const { Dog, Temperament } = require('../db');
const axios = require('axios');
const cleanArray = require('./cleanArray');

const allDogs = async () => {
  const { data } = await axios(`${endpoint}?api_key=${api_key}`);
  if (!data.length) throw Error('Missing Dogs in API');

  let dbData = await Dog.findAll({
    include: [{ model: Temperament, through: { attributes: [] } }],
  });
  dbData = cleanArray(dbData);

  const allDogs = [...dbData, ...data];
  if (!allDogs.length) throw Error('No dogs found');

  return allDogs;
};

module.exports = allDogs;
