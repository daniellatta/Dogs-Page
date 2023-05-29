import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cleanState, getDogById } from '../../redux/action';
import style from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { dogById } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getDogById(id));
    return () => dispatch(cleanState());
  }, [id]);
  if (!dogById.name)
    return (
      <div>
        <h2>Cargando tu perro:</h2>
      </div>
    );
  const { name, height, weight, life_span, image, temperament } = dogById;
  return (
    <div className={style.container}>
      <div className={style.detail}>
        <div className={style.image}>
          <img src={image?.url} alt='perrito' />
        </div>
        <div className={style.content}>
          <h3>Name: {name}</h3>
          <h3>Height: {height?.metric} cms</h3>
          <h3>Weight: {weight?.metric} kg</h3>
          <h3>Longevity: {life_span}</h3>
          {temperament && <h3>Temperament: {temperament}</h3>}
        </div>
      </div>
    </div>
  );
};

export default Detail;
