import {I_ListItem} from "./I_SharePoint";

interface I_Galeria extends I_ListItem{
    Description: string;
    Image: string;
    ImageUrl: string;
    Category: string;
};

export default I_Galeria;