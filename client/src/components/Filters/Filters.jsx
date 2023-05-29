import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { filterByOrigin, filterTemps, orderByToken } from '../../redux/action';
import { getTemperaments } from '../../redux/action';
import style from './Filters.module.css';

const Filters = () => {
  const dispatch = useDispatch();
  const { allTemperaments } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getTemperaments());
  }, []);

  const handleOrigin = (event) => {
    dispatch(filterByOrigin(event.target.value));
  };

  const handleFilterTemp = (event) => {
    dispatch(filterTemps(event.target.value));
  };

  const handleOrder = (event) => {
    dispatch(orderByToken(event.target.value));
  };

  return (
    <div className={style.container}>
      {/*                    FILERT BY ORIGIN                    */}
      <select defaultValue='byOrigin' onChange={handleOrigin}>
        <option value='byOrigin' disabled hidden>
          Origin
        </option>
        <option value='All'>All</option>
        <option value='Bdd'>Createds</option>
        <option value='Api'>Api</option>
      </select>
      {/*        ----------------------------------------        */}

      {/*                         SORTER                         */}
      <select defaultValue='Origin' onChange={handleOrder}>
        <option value='LowToHigh' disabled hidden>
          Sort By:
        </option>
        <option value='A'>Alphabetic: A to Z</option>
        <option value='D'>Alphabetic: Z to A</option>
        <option value='weightDown'>Weight: Low to High</option>
        <option value='weightUp'>Weight: High to Low</option>
      </select>
      {/*        ---------------------------------------        */}

      {/*                FILERT BY TEMPERAMENTO                 */}

      <select onChange={handleFilterTemp} defaultValue='Temp'>
        <option value='Temp' disabled hidden>
          Sort By Temperament
        </option>
        <option value='All'>All</option>
        {allTemperaments.map((temp) => {
          return (
            <option key={temp.id} value={temp.name}>
              {temp.name}
            </option>
          );
        })}
      </select>

      {/*        ---------------------------------------        */}
    </div>
  );
};

export default Filters;
