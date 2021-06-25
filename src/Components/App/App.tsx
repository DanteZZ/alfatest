import React from 'react';
import '../../Assets/scss/normalize.scss';
import '../../Assets/scss/app.scss';
import logo from "../../Assets/images/logo.png";
import user from "../../Assets/images/user.png";
function App() {
  return (
  <div className="appwrapper">
    <header className="header">
      <div className="logo">
        <a href="#" className="logo__link">
          <img src={logo} alt="" className="logo__image" />
        </a>
        <div className="logo__border"></div>
        <div className="logo__text">Тестовое задание</div>
      </div>
      <nav className="nav">
        <div className="nav__list">
          <button className="button button__primary">Добавить клиента</button>
          <a href="#" className="nav__item">Список клиентов</a>
        </div>
      </nav>
    </header>
    <div className="body-wrapper">
      <section className="htext">
        <div className="htext__block">
          <h1 className="htext__title">Список клиентов</h1>
        </div>
        <div className="htext__block">
          <div className="searchbar">
            <input type="text" placeholder="Поиск по имени" className="input" />
            <button className="button button__primary m0">Поиск</button>
          </div>
        </div>
      </section>
      <section className="customers">
        <div className="customers_item">
          <div className="customers_item__block">
            <img alt="" src={user} className="customers_item__avatar"/>
          </div>
          <div className="customers_item__block customers_item__block_full">
            <span className="customers_item__name">name <small className="customers_item__small">dob</small></span>
            <span className="customers_item__address">address</span>
          </div>
          <div className="customers_item__block customers_item__block_full">
            <span className="customers_item__htext">Телефон</span>
            <a href="#" className="customers_item__link">phone</a>
            <a href="#" className="customers_item__link">phone</a>
          </div>
          <div className="customers_item__block customers_item__block_full">
            <span className="customers_item__htext">E-Mail</span>
            <a href="#" className="customers_item__link">email</a>
            <a href="#" className="customers_item__link">email</a>
          </div>
          <div className="customers_item__block text-center">
            <span className="customers_item__htext">Дата деактивации</span>
            <span className="customers_item__text">e_date</span>
          </div>
          <div className="customers_item__block text-center">
            <span className="customers_item__htext">Остаток на счёте</span>
            <span className="customers_item__text">balance</span>
          </div>
        </div>
      </section>
    </div>

    <footer className="footer">
      <div className="pagination">
        <button className="button button__secondary button_active">1</button>
        <button className="button button__secondary">2</button>
        <button className="button button__secondary">...</button>
      </div>
      <div className="copyright">
        <p className="copyright__text">Разработал:</p>
        <a href="#" className="copyright__link">Трофимов Максим Александрович</a>
      </div>
    </footer>

    <div className="modal">
      <div className="modal__block">
        <div className="modal__header">
          <div className="modal__header-text">Добавление нового клиента</div>
          <button className="button modal__closebutton"></button>
        </div>
        <div className="modal__body">
          <form className="form" action="#">
            <div className="input__group">
              <label htmlFor="#inputName" className="input__label">Имя</label>
              <input type="text" placeholder="Введите имя клиента" id="inputName" className="input input__full" />
            </div>
            <button className="button button__primary button__full">Добавить</button>
          </form>
        </div>
      </div>
    </div>
    
  </div>
  );
}

export default App;
