import React from 'react';
import user from "../../Assets/images/user.png";
function CustomersList() {
  return (
    <section className="customers">
        <div className="customers_item customers_item__disabled">
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
  );
}

export default CustomersList;
