import React from "react";
import "./ToolItem.css";
import {ToolCard} from '../ToolCard/ToolCard';
import {Comments} from '../../Comments/Comments';
import { BtnGroup } from "../../BtnGroup/BtnGroup";

class ToolItem extends React.Component {


  render() {
    return (      
      <li className="tool-item">
        <ToolCard toolItem={this.props}/>

        <Comments toolItem={this.props}/>

        <BtnGroup toolItem={this.props}/>
      </li>
    );
  }
}


export { ToolItem };
