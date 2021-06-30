import React from 'react';
import "@assets"
import '../../Assets/scss/normalize.scss';
import '../../Assets/scss/app.scss';
import Header from '../Header/Header';
import Customers from '../Customers/Customers';
import Footer from '../Footer/Footer';
import Modal from '../Modal/Modal';
function App() {
  return (
  <div className="appwrapper">
    <Header/>
    <div className="body-wrapper">
      <Customers/>
    </div>
    <Footer/>
    <Modal/>
  </div>
  );
}

export default App;
