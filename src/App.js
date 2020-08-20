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
          <li className="tool-item">
            <section className="tool-card">
             <img src="img/jigsaw.jpg" className="tool__img" alt={catalog.[0].toolName}/>

             <div className="tool__label">
                <div className="tool__desc">
                  <h2 className="tool__name">{catalog[0].toolName}</h2>

                  <p className="tool__text">{catalog[0].toolText}</p>
                </div>

                <div className="tool__tally">
                 <p className="tool__price">{catalog[0].price} руб/шт</p>

                 <p className="tool__availability">{(catalog[0].quantity !== 0) ? 'в наличии' : "нет в наличии"}</p>

                  <p className="tool__quantity">{catalog[0].quantity} шт</p>
               </div>
              </div>
            </section>

            <section className="comments">
              <h2 className="сomments__header">отзывы</h2>

              <form className="comment-recorder">
                <h3 className="recorder__header">Оставьте ваш отзыв</h3>

                <label className="recorder__label">Ваше имя:
                  <input type="text" className="recorder__input" placeholder="Как вас зовут?" autoFocus/>
                </label>

                <label className="recorder__label">Опишите ваши впечатления:
                  <input className="recorder__input" placeholder="Ваши впечатления от использования товара."/>
                </label>

                <label className="recorder__label">Опишите достоинства:
                  <input className="recorder__input" placeholder="Что вам понравилось больше всего?"/>
                </label>

                <label className="recorder__label">Опишите недостатки:
                  <input className="recorder__input" placeholder="Есть ли недостатки?"/>
                </label>

                <button className="btn recorder__btn" type="submit">отправить отзыв</button>                

              </form>

              <ul className="comment-list">
                <li className="comment-item">
                  <p className="comment__text comment__autor">{catalog[0].toolComment[0].commentAutorName}
                    <span>{new Date(catalog[0].toolComment[0].commentDate).toLocaleString()}</span>
                  </p>

                  <p className="comment__text">{catalog[0].toolComment[0].commentText}</p>

                  <p className="comment__text text_positives">Достоинства: <span>{catalog[0].toolComment[0].commentPositives}</span></p>

                  <p className="comment__text text_negatives">Недостатки: <span>{catalog[0].toolComment[0].commentNegatives}</span></p>

                  <button className="btn__del" type="button" aria-label="удалит отзыв">&#10006;</button>
                </li>
              </ul>
            </section>

            <div className="btn-group">
              <button className="btn" type="button">показать/скрыть отзывы
                <span className="count">{catalog[0].toolComment.length}</span>
              </button>

              <button className="btn" type="button">купить</button>
            </div>
          </li>
        </ul>
      </section>
    </div>
  );
}

export default App;
