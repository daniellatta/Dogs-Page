import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDogsByBreed } from '../../redux/action';
import style from './SearchBar.module.css';

const Searchbar = ({ breeds }) => {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(getDogsByBreed(value));
    setValue('');
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <input onChange={handleChange} value={value} />
        <button type='submit'>Search</button>
      </form>
      <div className={style.dropDown}>
        {breeds
          .filter((breed) => {
            const searchTerm = value.toLowerCase();
            const name = breed.name.toLowerCase();
            return (
              searchTerm &&
              (name.startsWith(searchTerm) || name.includes(searchTerm)) &&
              name !== searchTerm
            );
          })
          .slice(0, 6)
          .map((breed) => {
            return (
              <div
                className={style.option}
                key={breed.id}
                onClick={() => {
                  setValue(breed.name);
                }}>
                {breed.name}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Searchbar;
