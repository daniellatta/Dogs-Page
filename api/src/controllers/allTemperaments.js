require('dotenv').config();
const { endpoint, api_key } = process.env;
const axios = require('axios');
const { Temperament } = require('../db');

const allTemperaments = async () => {
  let array = [];
  let aux = [];
  const { data } = await axios(`${endpoint}?api_key=${api_key}`);
  data.forEach((dog) => {
    if (dog.temperament) {
      aux = dog.temperament.split(', ');
    }
    aux.forEach((element) => {
      if (!array.includes(element)) {
        array.push(element);
      }
    });
  });

  array.sort((a, b) => a.localeCompare(b));
  const temperaments = array.map((temp) => {
    return { name: temp };
  });
  Temperament.bulkCreate(temperaments);
};

module.exports = allTemperaments;
