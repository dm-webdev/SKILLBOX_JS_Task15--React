import React from 'react';
import logo from './modules/start/logo.svg';
import './modules/start/App.css';
import './modules/catalog/catalog.css';
import catalog from '../src/assets/database';


function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <section className="catalog">
        <h1 className="catalog__header">Каталог электроинструмента</h1>

        <ul className="tool-list">
          <li className="tool-card">
            <img src="img/jigsaw.jpg" className="tool__img" alt={catalog.[0].toolName}/>

            <div className="tool__label">
              <div className="tool__desc">
                <h2 className="tool__name">{catalog[0].toolName}</h2>

                <p className="tool__text">{catalog[0].toolText}</p>
              </div>

              <div className="tool__tally">
                <p className="tool__price">{catalog[0].price} руб/шт</p>

                <p className="tool__availability">{(catalog[0].quantity !== 0) ? 'В наличии' : "Нет в наличии"}</p>

                <p className="tool__quantity">{catalog[0].quantity} шт</p>
              </div>
            </div>










          </li>

        </ul>






      </section>





    </div>
  );
}

export default App;
