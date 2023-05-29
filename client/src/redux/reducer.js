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

const initialState = {
  allBreeds: [],
  filtered: [],
  allTemperaments: [],
  dogById: {},
  dogsByBreed: [],
  newDog: {},
  created: false,
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_ALL_DOGS:
      return {
        ...state,
        allBreeds: payload,
        filtered: payload,
        created: false,
      };
    case GET_DOG_BY_ID:
      return {
        ...state,
        dogById: payload,
      };
    case GET_DOG_BY_BREED:
      return {
        ...state,
        dogsByBreed: payload,
      };
    case CREATE_DOG:
      return {
        ...state,
        newDog: payload,
        created: true,
      };
    case GET_TEMPERAMENTS:
      return {
        ...state,
        allTemperaments: payload,
      };
    case CLEAN_STATE:
      return {
        ...state,
        dogById: {},
      };
    case ORIGIN:
      return {
        ...state,
        filtered:
          payload === 'Bdd'
            ? [...state.allBreeds].filter((breed) => isNaN(+breed.id))
            : payload === 'Api'
            ? [...state.allBreeds].filter((breed) => !isNaN(+breed.id))
            : [...state.allBreeds],
      };
    case FILTER:
      return {
        ...state,
        filtered:
          payload === 'All'
            ? [...state.allBreeds]
            : [...state.allBreeds].filter((breed) => {
                if (breed.temperament) {
                  return breed.temperament.includes(payload);
                } else if (breed.Temperaments) {
                  return breed.Temperaments.some(
                    (element) => element.name === payload
                  );
                } else {
                  return false;
                }
              }),
      };
    case ORDER:
      if (payload === 'weightDown') {
        return {
          ...state,
          filtered: [...state.filtered]
            .filter((dog) => !dog.weight.metric.includes('NaN'))
            .sort(
              (a, b) =>
                a.weight.metric.slice(0, 2) - b.weight.metric.slice(0, 2)
            ),
        };
      } else if (payload === 'weightUp') {
        return {
          ...state,
          filtered: [...state.filtered]
            .filter((dog) => !dog.weight.metric.includes('NaN'))
            .sort(
              (a, b) =>
                b.weight.metric.slice(0, 2) - a.weight.metric.slice(0, 2)
            ),
        };
      } else if (payload === 'D') {
        return {
          ...state,
          filtered: [...state.filtered].sort(
            (a, b) => -1 * a.name.localeCompare(b.name)
          ),
        };
      } else {
        return {
          ...state,
          filtered: [...state.filtered].sort((a, b) =>
            a.name.localeCompare(b.name)
          ),
        };
      }

    default:
      return { ...state };
  }
};

export default reducer;
