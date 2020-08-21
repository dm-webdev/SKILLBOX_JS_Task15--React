import React from 'react';
import './BtnGroup.css';

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

export {BtnGroup};