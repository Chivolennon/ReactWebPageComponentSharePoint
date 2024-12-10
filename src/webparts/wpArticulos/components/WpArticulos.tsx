import * as React from "react";
import type { IWpArticulosProps } from "./IWpArticulosProps";
require("../assets/Css/style.css");

const WpArticulos: React.FC<IWpArticulosProps> = ({}) => {
  return (
      <div className="containerArt">
        {/* //LADO IZQUIERDO */}
        <div className="leftArt">
          <div className="itemArt">
            <img
              src={require("../assets/like.png")}
              alt="like"
              // style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="itemArt">
            <img
              src={require("../assets/heath.png")}
              alt="corazon"
              // style={{ width: "auto", height: "auto" }}
            />
          </div>
          <div className="itemArt">
            <img src={require("../assets/hand.png")} alt="hand" />
          </div>
          <div className="itemArt">
            <img src={require("../assets/smile.png")} alt="smile" />
          </div>
        </div>
        {/* // LADO DERECHO */}
        <div className="rightArt">
          <div className="itemArt">A</div>
          <div className="itemArt">B</div>
          <div className="itemArt">C</div>
          <div className="itemArt">D</div>
        </div>
      </div>
  );
};
export default WpArticulos;
