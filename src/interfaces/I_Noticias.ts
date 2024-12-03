import {I_ListItem} from "./I_SharePoint";

interface I_Noticia extends I_ListItem{
    Description: string;
    Image: string;
    ImageUrl: string;
    Date: string;
};

export default I_Noticia;