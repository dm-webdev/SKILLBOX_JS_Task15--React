import React from 'react';
import './CommentRecorder.css';

function CommentRecorder() {
  return (
    <form className="comment-recorder">
      <h3 className="recorder__header">Оставьте ваш отзыв</h3>

      <label className="recorder__label">Ваше имя:
        <input type="text" className="recorder__input" placeholder="Как вас зовут?" autoFocus required/>
      </label>

      <label className="recorder__label">Опишите ваши впечатления:
        <input className="recorder__input" placeholder="Ваши впечатления от использования товара." required/>
      </label>

      <label className="recorder__label">Опишите достоинства:
        <input className="recorder__input" placeholder="Что вам понравилось больше всего?"/>
      </label>

      <label className="recorder__label">Опишите недостатки:
        <input className="recorder__input" placeholder="Есть ли недостатки?"/>
      </label>

      <button className="btn recorder__btn" type="submit">отправить отзыв</button>
    </form>
  )
};

export {CommentRecorder};