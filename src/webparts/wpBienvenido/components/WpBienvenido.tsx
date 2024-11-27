import * as React from "react";
import type { IWpBienvenidoProps } from "./IWpBienvenidoProps";
import { escape } from "@microsoft/sp-lodash-subset";
// import styles from "./WpBienvenido.module.scss";
import {registerIcons} from '@fluentui/react/lib/Styling';
import {TransferCallIcon} from '@fluentui/react-icons-mdl2';
import {MailIcon} from '@fluentui/react-icons-mdl2';
import {RelationshipIcon} from '@fluentui/react-icons-mdl2';
require("../assets/Css/style.css");

registerIcons({
  icons: {
    TransferCall: <TransferCallIcon />,
    Mail: <MailIcon/>,
    Share: <RelationshipIcon/>,
  },
});

const ActionClick = () =>{
  alert("Se logró!")
};

export default class WpBienvenido extends React.Component<IWpBienvenidoProps> {
  public render(): React.ReactElement<IWpBienvenidoProps> {
    const { userDisplayName } = this.props;

    return (
      <div className="header">
        <div className="contenorUsuario">
          <img className="iconUser" 
               src="/_layouts/15/userphoto.aspx?size=S&amp;accountname=ep_ssanchez@colbun.cl" 
               alt="Foto de usuario" />
          <div className="userInfo">
              <h5 className="textLog">Bienvenido</h5>
              <p className="userText">{escape(userDisplayName)}</p>
          </div>  
          <div>
              <TransferCallIcon onClick={ActionClick} 
              style={{fontSize:20, marginLeft:20}}/>
              <RelationshipIcon style={{fontSize:20, marginLeft:15}}/>
              <MailIcon style={{fontSize:20, marginLeft:15}}/>
          </div>
        </div>
      </div>
    );
  }
}