import Card from '../Card/Card';
import style from './Cards.module.css';

const Cards = ({ breeds }) => {
  return (
    <div className={style.container}>
      {breeds?.map((breed) => {
        return (
          <Card
            key={breed.id}
            id={breed.id}
            name={breed.name}
            life_span={breed.life_span}
            temperament={breed.temperament}
            image={breed.image}
          />
        );
      })}
    </div>
  );
};

export default Cards;
