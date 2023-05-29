require('dotenv').config();
const { endpoint, api_key } = process.env;
const axios = require('axios');
const { Dog } = require('../db');
const normalizeName = require('./wordsToUpperCase');

const filterByBreed = async (q) => {
  if (!q) return [];
  let breedName = normalizeName(q);

  let { data } = await axios(`${endpoint}?api_key=${api_key}`);
  data = data.filter((breed) => breed.name.includes(breedName));

  let dataDb = await Dog.findAll();
  dataDb = dataDb.filter((breed) => breed.name.includes(breedName));

  if (!data.length && !dataDb.length) throw Error('No breeds  with that name');

  const dogsByBreed = [...data, ...dataDb];
  return dogsByBreed;
};

module.exports = filterByBreed;
