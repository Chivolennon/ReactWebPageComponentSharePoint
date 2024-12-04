import * as React from "react";
import type { IWpArticulosProps } from "./IWpArticulosProps";
require("../assets/Css/style.css");

const WpArticulos: React.FC<IWpArticulosProps> = ({}) => {
  return (
    <div className="container">

      {/* //LADO IZQUIERDO */}
      <div className="left">
        <div className="item">
          <img
            src={require("../assets/like.png")}
            alt="like"
            // style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="item">
          <img
            src={require("../assets/heath.png")}
            alt="corazon"
            // style={{ width: "auto", height: "auto" }}
          />
        </div>
        <div className="item">
          <img src={require("../assets/hand.png")} 
          alt="hand" />
        </div>
        <div className="item">
          <img src={require("../assets/smile.png")} 
          alt="smile" />
        </div>
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
export default WpArticulos;
