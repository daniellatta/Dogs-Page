import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createDog } from '../../redux/action';
import style from './FormCreate.module.css';
import useCreateDogs from '../../hooks/useCreateDogs';

const FormCreate = () => {
  const { handleChange, handleTemps, handleDelete, temps, error, dog, newDog } =
    useCreateDogs();
  const { allTemperaments, created } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      dispatch(createDog(newDog));
    } catch (error) {
      alert(error);
    }
  };

  if (created) {
    return (
      <div className={style.container}>
        <h2>Your breed has been created successfully</h2>
        <NavLink to='/home' className={style.button}>
          Go Home
        </NavLink>
      </div>
    );
  }

  return (
    <div className={style.container}>
      <form onSubmit={handleSubmit} className={style.form}>
        <div>
          <label htmlFor='name'>Breed Name: </label>
          <input
            type='text'
            name='name'
            onChange={(event) => handleChange(event)}
          />
        </div>
        {error?.name && <p className={style.error}>{error?.name}</p>}
        <div>
          <label htmlFor='minHeight'>Min Height: </label>
          <input
            type='text'
            name='minHeight'
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor='maxHeight'>Max Height: </label>
          <input
            type='text'
            name='maxHeight'
            onChange={(event) => handleChange(event)}
          />
        </div>
        {error?.height && <p className={style.error}>{error?.height}</p>}
        <div>
          <label htmlFor='minWeight'>Min Weight: </label>
          <input
            type='text'
            name='minWeight'
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor='maxWeight'>Max Weight: </label>
          <input
            type='text'
            name='maxWeight'
            onChange={(event) => handleChange(event)}
          />
        </div>
        {error?.weight && <p className={style.error}>{error?.weight}</p>}
        <div>
          <label htmlFor='life_span'>Life Span Min: </label>
          <input
            type='text'
            name='minLife_span'
            onChange={(event) => handleChange(event)}
          />
          <label htmlFor='life_span'>Life Span Max: </label>
          <input
            type='text'
            name='maxLife_span'
            onChange={(event) => handleChange(event)}
          />
        </div>
        {error?.life_span && <p className={style.error}>{error?.life_span}</p>}
        <div>
          <label htmlFor='image'>Put and image url here: </label>
          <input
            type='text'
            name='image'
            onChange={(event) => handleChange(event)}
          />
        </div>
        {error?.image && <p className={style.error}>{error?.image}</p>}
        <div>
          <label htmlFor='temperaments'>Temperament: </label>
          <select
            onChange={(event) => handleTemps(event)}
            defaultValue='default'>
            <option value='default' disabled hidden>
              Temperaments
            </option>
            {allTemperaments.map((temps) => {
              return (
                <option key={temps.id} value={temps.id}>
                  {temps.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={style.temps}>
          {temps &&
            temps.map((temp) => {
              return (
                <div
                  key={temp.id}
                  onClick={() => {
                    handleDelete(temp.id);
                  }}>
                  {temp.name}
                </div>
              );
            })}
        </div>
        <button
          type='sumbit'
          disabled={
            Object.keys(dog).length < 7 ||
            (error && Object.values(error).length)
          }>
          Create
        </button>
      </form>
    </div>
  );
};

export default FormCreate;
