import React from 'react';
import './ToolList.css';
import {ToolItem} from './ToolItem/ToolItem';

function ToolList(props) {
  return (
    <ul className="tool-list">
      {props.catalog.map(toolItem => {
        return <ToolItem catalog={toolItem} key={toolItem.id} />
        })}   
    </ul>
  )
};

export {ToolList};