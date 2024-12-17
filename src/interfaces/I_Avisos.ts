import {I_ListItem} from "./I_SharePoint";

interface I_Avisos extends I_ListItem{
    Image: string;
    ImageUrl: string;
    Price: number;
    Date: string;
}

export default I_Avisos;