import { SPHttpClient } from "@microsoft/sp-http";
import { ISPFXContext } from "@pnp/sp";

export interface IWpNoticiasProps {
  spHttpClient: SPHttpClient; // Cliente HTTP de SharePoint
  siteUrl: string; // URL del sitio actual
  context: ISPFXContext;
}

