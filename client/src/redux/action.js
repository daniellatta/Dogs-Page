import {
  GET_ALL_DOGS,
  GET_DOG_BY_ID,
  GET_DOG_BY_BREED,
  CREATE_DOG,
  GET_TEMPERAMENTS,
  FILTER,
  ORDER,
  ORIGIN,
  CLEAN_STATE,
} from './action-type';
import axios from 'axios';

export const getAllDogs = () => {
  const endpoint = 'http://localhost:3001/dogs';

  return (dispatch) => {
    axios
      .get(endpoint)
      .then(({ data }) => {
        return dispatch({
          type: GET_ALL_DOGS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getDogById = (id) => {
  const endpoint = `http://localhost:3001/dogs/${id}`;

  return (dispatch) => {
    axios
      .get(endpoint)
      .then(({ data }) => {
        return dispatch({
          type: GET_DOG_BY_ID,
          payload: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getDogsByBreed = (breed) => {
  const endpoint = `http://localhost:3001/dogs/name?q=${breed}`;

  return (dispatch) => {
    axios
      .get(endpoint)
      .then(({ data }) => {
        return dispatch({
          type: GET_DOG_BY_BREED,
          payload: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const getTemperaments = () => {
  const endpoint = 'http://localhost:3001/temperaments';

  return (dispatch) => {
    axios
      .get(endpoint)
      .then(({ data }) => {
        return dispatch({
          type: GET_TEMPERAMENTS,
          payload: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const createDog = (newBreed) => {
  const endpoint = 'http://localhost:3001/dogs';

  return (dispatch) => {
    axios
      .post(endpoint, newBreed)
      .then(({ data }) => {
        return dispatch({
          type: CREATE_DOG,
          payload: data,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
};

export const cleanState = () => {
  return { type: CLEAN_STATE };
};

export const filterTemps = (temperament) => {
  return { type: FILTER, payload: temperament };
};

export const orderByToken = (order) => {
  return { type: ORDER, payload: order };
};

export const filterByOrigin = (origin) => {
  return { type: ORIGIN, payload: origin };
};
