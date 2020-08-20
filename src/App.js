import React from 'react';
import logo from './modules/start/logo.svg';
import './modules/start/App.css';
import './modules/catalog/catalog.css';
import bd from '../src/assets/database';

const catalog = bd;

function Header() {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Edit 
        <code>src/App.js</code> and save to reload.
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
  )
};




// function ToolCard(props) {

//   console.log(props.catalog);
//   return(
//     <section className="tool-card">
//       <img src="img/jigsaw.jpg" className="tool__img" alt={props.toolName}/>

//       <div className="tool__label">
//         <div className="tool__desc">
//           <h2 className="tool__name">{props.toolName}</h2>

//           <p className="tool__text">{catalog[0].toolText}</p>
//         </div>

//         <div className="tool__tally">
//           <p className="tool__price">{catalog[0].price} руб/шт</p>

//           <p className="tool__availability">{(catalog[0].quantity !== 0) ? 'в наличии' : "нет в наличии"}</p>

//           <p className="tool__quantity">{catalog[0].quantity} шт</p>
//         </div>
//       </div>
//     </section>
//   )
// };


// function CommentRecorder() {
//   return (
//     <form className="comment-recorder">
//       <h3 className="recorder__header">Оставьте ваш отзыв</h3>

//       <label className="recorder__label">Ваше имя:
//         <input type="text" className="recorder__input" placeholder="Как вас зовут?" autoFocus required/>
//       </label>

//       <label className="recorder__label">Опишите ваши впечатления:
//         <input className="recorder__input" placeholder="Ваши впечатления от использования товара." required/>
//       </label>

//       <label className="recorder__label">Опишите достоинства:
//         <input className="recorder__input" placeholder="Что вам понравилось больше всего?"/>
//       </label>

//       <label className="recorder__label">Опишите недостатки:
//         <input className="recorder__input" placeholder="Есть ли недостатки?"/>
//       </label>

//       <button className="btn recorder__btn" type="submit">отправить отзыв</button>
//     </form>
//   )
// };


// function CommentItem() {
//   return (
//     <li className="comment-item">
//       <p className="comment__text comment__autor">{catalog[0].toolComment[0].commentAutorName}
//       <span>{new Date(catalog[0].toolComment[0].commentDate).toLocaleString()}</span>
//       </p>

//       <p className="comment__text">{catalog[0].toolComment[0].commentText}</p>

//       <p className="comment__text text_positives">Достоинства: <span>{catalog[0].toolComment[0].commentPositives}</span></p>

//       <p className="comment__text text_negatives">Недостатки: <span>{catalog[0].toolComment[0].commentNegatives}</span></p>

//       <button className="btn__del" type="button" aria-label="удалит отзыв">&#10006;</button>
//     </li>
//   )
// };


// function CommentsList() {
//   return (
//     <ul className="comment-list">
//       <CommentItem />
//     </ul>
//   )
// };


// function Comments() {
//   return (
//     <section className="comments">
//       <h2 className="сomments__header">отзывы</h2>

//       <CommentRecorder />

//       <CommentsList />
//     </section>
//   )
// };


function BtnGroup(toolItem) {
  const toolCard = toolItem.toolItem.catalog;
  return (
    <div className="btn-group">
      <button className="btn" type="button">показать/скрыть отзывы
        <span className="count">{toolCard.toolComment.length}</span>
      </button>

      <button className="btn" type="button">купить</button>
    </div>
  )
};


function ToolItem(toolItem) {
  console.log(toolItem);
  return (
    <li className="tool-item">
      <ToolCard toolItem={toolItem}/>

      {/* <Comments /> */}

      <BtnGroup toolItem={toolItem}/>
    </li>
  )
};



function ToolCard(toolItem) {

  const toolCard = toolItem.toolItem.catalog;

  console.log(toolCard);
  return(
    <section className="tool-card">
      <img src={toolCard.img} className="tool__img" alt={toolCard.toolName}/>

      <div className="tool__label">
        <div className="tool__desc">
          <h2 className="tool__name">{toolCard.toolName}</h2>

          <p className="tool__text">{toolCard.toolText}</p>
        </div>

        <div className="tool__tally">
          <p className="tool__price">{toolCard.price} руб/шт</p>

          <p className="tool__availability">{(toolCard.quantity !== 0) ? 'в наличии' : "нет в наличии"}</p>

          <p className="tool__quantity">{toolCard.quantity} шт</p>
        </div>
      </div>
    </section>
  )
};










// ----------------------Test-----------------------
// function ToolListTest(props) {
//   const listItems = props.catalog.map((listItem) => <li  key={listItem.id}>{listItem.toolName}></li>)
//   return (
//     <ul className="tool-list">
//       <li>{listItems}</li>
//     </ul>
//   )
// }



function ToolList(props) {
  return (
    <ul className="tool-list">
      {props.catalog.map(toolItem => { console.log(toolItem.id)
        return <ToolItem catalog={toolItem} key={toolItem.id} />
        })
      }   
    </ul>
  )
};




function Catalog() {
  return (
    <section className="catalog">
    <h1 className="catalog__header">Каталог электроинструмента</h1>
      {/* <ToolListTest catalog={catalog} /> */}
      <ToolList catalog={catalog}/>
    </section>
  )
};



// function ToolItem({toolItem}) {
//     return (
//       <li className="tool-item">
//         <h2 className="tool__name">{toolItem.toolName}</h2>
//       </li>
//     )
//   };




// function ToolList(props) {
//   console.log(props);
//   cont toolItems = props.map((toolItem) =>
//   <li>{toolItem}</li>)
//   return (
// toolItems



    // <ul className="tool-list">
    //   {props.map(toolItem => {
    //     return <h2 className="tool__name">{toolItem.toolName}</h2>
    //   })}
    // </ul>
//   )
// };





// function Catalog() {
//   return (
//     <section className="catalog">
//     <h1 className="catalog__header">Каталог электроинструмента</h1>
//       <ToolList />
//     </section>
//   )
// };


function App() {
  return (
    <div className="App">
      <Header />
      
      <Catalog />
    </div>
  );
}

export default App;
