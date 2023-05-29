import { NavLink } from 'react-router-dom';
import style from './LandingPage.module.css';

const LandingPage = () => {
  return (
    <div className={style.container}>
      <div className={style.box}>
        <h1 className={style.text}>Dogs Page</h1>
        <h3 className={style.text}>
          Here you will find all kind of information
        </h3>
        <h3 className={style.text}>about dogs breeds</h3>
        <NavLink to='/home' className={style.button}>
          Go home
        </NavLink>
      </div>
    </div>
  );
};

export default LandingPage;
