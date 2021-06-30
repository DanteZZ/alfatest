import React from 'react';
function CustomersHead() {
  return (
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
  );
}

export default CustomersHead;
