import React from 'react';
import '../../Assets/scss/normalize.scss';
import '../../Assets/scss/app.scss';
function App() {
  return (
  <div className="appwrapper">
    <header className="header">
      <nav className="nav">
        <ul className="nav__list">
          <li className="nav__item">Обычный айтем</li>
          <li className="nav__item nav__item--selected"> Выбранный</li>
        </ul>
      </nav>
    </header>
    <section className="customers">

    </section>
    <footer className="footer">

    </footer>
  </div>
  );
}

export default App;
