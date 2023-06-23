import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="header ">
      <Link to="/" className="header__logo" aria-label="Логотип прокта Место" />
      <div className="header__info">
        <p className="header__email">123</p>
        <Link to="" className="header__link">
          Выйти
        </Link>
      </div>
    </header>
  );
}

export default Header;
