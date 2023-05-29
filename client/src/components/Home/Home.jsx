import Cards from '../Cards/Cards';
import style from './Home.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDogs } from '../../redux/action';
import Filters from '../Filters/Filters';
import Searchbar from '../SearchBar/Searchbar';

const Home = () => {
  const dispatch = useDispatch();
  const { allBreeds, filtered, dogsByBreed, created } = useSelector(
    (state) => state
  );
  const [currentPage, setCurrentPage] = useState(1);
  const [flag, setFlag] = useState(true);

  useEffect(() => {
    if (!allBreeds.length || created) {
      dispatch(getAllDogs());
    }

    if (copyBreeds.length < 9) {
      setFlag(false);
    } else setFlag(true);

    setCurrentPage(1);
  }, [filtered, dogsByBreed, created]);

  //Paginado
  let copyBreeds = [...filtered];
  if (dogsByBreed.length) copyBreeds = [...dogsByBreed];
  const lastIndex = currentPage * 8;
  const firstIndex = lastIndex - 8;
  let breedPage = copyBreeds.slice(firstIndex, lastIndex);
  //
  return (
    <div className={style.container}>
      <header className={style.header}>
        <Searchbar breeds={allBreeds} />
        <Filters />
      </header>
      <section>
        <Cards breeds={breedPage} />
      </section>

      {flag && (
        <footer className={style.footer}>
          <button
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
            className={style.button}>
            prev
          </button>
          <p>{currentPage}</p>
          <button
            onClick={() =>
              lastIndex <= copyBreeds.length - 1 &&
              setCurrentPage(currentPage + 1)
            }
            className={style.button}>
            next
          </button>
        </footer>
      )}
    </div>
  );
};

export default Home;
