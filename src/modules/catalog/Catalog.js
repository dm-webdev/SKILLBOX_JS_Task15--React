import React from 'react';
import './Catalog.css';
import bd from '../../assets/database';
import {ToolList} from './ToolList/ToolList';

const catalog = bd;

function Catalog() {
  return (
    <section className="catalog">
    <h1 className="catalog__header">Каталог электроинструмента</h1>
      <ToolList catalog={catalog}/>
    </section>
  )
};

export {Catalog};
