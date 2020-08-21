import React from 'react';
import './ToolItem.css';
import {ToolCard} from '../ToolCard/ToolCard';
import {Comments} from '../../Comments/Comments';
import {BtnGroup} from '../../BtnGroup/BtnGroup';

function ToolItem(toolItem) {
  return (
    <li className="tool-item">
      <ToolCard toolItem={toolItem}/>

      <Comments toolItem={toolItem}/>

      <BtnGroup toolItem={toolItem}/>
    </li>
  )
};

export {ToolItem};