import { SPFI, spfi } from "@pnp/sp";
import { SPFx } from "@pnp/sp/behaviors/spfx";

export const getSP = (context: any): SPFI => {
  return spfi().using(SPFx(context));
};
  
interface I_ListItem{
    Title : string;
    Id : number;
};
interface I_Image{
    fileName : string;
};

export  {I_ListItem, I_Image};