import * as React from "react";
require("../assets/Css/style.css");
import { IWpGaleriaProps } from "./IWpGaleriaProps";

const WpGaleria: React.FC<IWpGaleriaProps> = ({}) => {
  return (
    <div className="container">
      {/* //LADO IZQUIERDO */}
      <div className="left">
        <div className="item">A</div>
        <div className="listItemgaleria">
          <ul className="commandBarContainer">
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
          </ul>
        </div>
        <div className="item">B</div>
      </div>
      {/* // LADO DERECHO */}
      <div className="right">
        <div className="item">A</div>
        <div className="item">B</div>
        <div className="item">C</div>
        <div className="item">D</div>
      </div>
    </div>
  );
};
export default WpGaleria;
