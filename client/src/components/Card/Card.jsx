import { NavLink } from 'react-router-dom';
import style from './Card.module.css';

const Card = ({ id, image, name, life_span, temperament }) => {
  return (
    <div className={style.card}>
      <NavLink className={style.link} to={`/details/${id}`}>
        <div className={style.image}>
          <img src={image.url || image} alt={`Image of the breed ${name}`} />
        </div>
        <div className={style.content}>
          <h4 className={style.text}>{name}</h4>
          <h4 className={style.text}>{life_span}</h4>
          <h4 className={style.text}>{temperament}</h4>
        </div>
      </NavLink>
    </div>
  );
};

export default Card;
