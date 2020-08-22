import React from "react";
import "./ToolCard.css";

function ToolCard(toolItem) {
  const toolCard = toolItem.toolItem.catalog;

  return (
    <section className="tool-card">
      <img src={toolCard.img} className="tool__img" alt={toolCard.toolName} />

      <div className="tool__label">
        <div className="tool__desc">
          <h2 className="tool__name">{toolCard.toolName}</h2>

          <p className="tool__text">{toolCard.toolText}</p>
        </div>

        <div className="tool__tally">
          <p className="tool__price">{toolCard.price} руб/шт</p>

          <p className="tool__availability">
            {toolCard.quantity !== 0 ? "в наличии" : "нет в наличии"}
          </p>

          <p className="tool__quantity">{toolCard.quantity} шт</p>
        </div>
      </div>
    </section>
  );
}

export { ToolCard };
