require("dotenv").config();
const { endpoint, api_key } = process.env;
const axios = require("axios");
const { Dog, Temperament } = require("../db");
const cleanArray = require("./cleanArray");

const filterById = async (id) => {
  if (isNaN(+id)) {
    let filterDb = await Dog.findByPk(id, {
      include: [{ model: Temperament, through: { attributes: [] } }],
    });
    filterDb = cleanArray([filterDb]);
    return filterDb[0];
  }
  let { data } = await axios(`${endpoint}?api_key=${api_key}`);
  data = data.find((breed) => breed.id === +id);
  if (!data?.name) throw Error("No breeds found");
  return data;
};

module.exports = filterById;
