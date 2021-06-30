import React from 'react';
function Modal() {
  return (
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
  );
}

export default Modal;
