import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";
import WpNoticias from "./components/WpNoticias";
import { IWpNoticiasProps } from "./components/IWpNoticiasProps";

export default class WpNoticiasWebPart extends BaseClientSideWebPart<{}> {
  public render(): void {
    const element: React.ReactElement<IWpNoticiasProps> = React.createElement(
      WpNoticias,
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
