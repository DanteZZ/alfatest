import React from 'react';
import logo from "../../Assets/images/logo.png";
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo__link">
          <img src={logo} alt="" className="logo__image" />
        </a>
        <div className="logo__border"></div>
        <div className="logo__text">Тестовое задание</div>
      </div>
      <nav className="nav">
        <div className="nav__list">
          <button className="button button__primary">Добавить клиента</button>
          <a href="/" className="nav__item">Список клиентов</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
