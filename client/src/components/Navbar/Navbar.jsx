import { NavLink, useLocation } from 'react-router-dom';
import style from './Navbar.module.css';

const Navbar = () => {
  const { pathname } = useLocation();

  if (pathname === '/') return;
  return (
    <div className={style.container}>
      <NavLink to='/home' className={style.button}>
        Home
      </NavLink>
      <p>🐶</p>
      <NavLink to='/create' className={style.button}>
        Create
      </NavLink>
    </div>
  );
};

export default Navbar;
