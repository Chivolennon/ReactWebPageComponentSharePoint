import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import WpAvisos from "./components/WpAvisos";
import { IWpAvisosProps } from "./components/IWpAvisosProps";

export default class WpAvisosWebPart extends BaseClientSideWebPart<{}> {
  public render(): void {
    const element: React.ReactElement<IWpAvisosProps> = React.createElement(
      WpAvisos,
      {
        spHttpClient: this.context.spHttpClient,
        siteUrl: this.context.pageContext.web.absoluteUrl, // Pasa la URL del sitio 
        context: this.context
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }
}
