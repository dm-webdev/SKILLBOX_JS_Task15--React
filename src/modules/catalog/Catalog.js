import React from "react";
import "./Catalog.css";
import {ToolList} from './ToolList/ToolList';
// import { render } from '@testing-library/react';

class Catalog extends React.Component {

  render() {
    return (
      <section className="catalog">
        <h1 className="catalog__header">Каталог электроинструмента</h1>
        <ToolList />
      </section>
    );
  }
}

export { Catalog };
