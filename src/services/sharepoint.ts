// exportar clase con metodos
// Utilizar pnp
// estudiar webhook || React class

import { ISPFXContext, spfi, SPFx } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
class Sharepoint{
    public static async ObtenerLista<T>(context: ISPFXContext, titulo: string){
        const sp = spfi().using(SPFx(context));
        const items: T[] = await sp.web.lists.getByTitle(titulo).items();    
        
        return items;
    };

    public static async ObtenerIdLista(context: ISPFXContext, titulo: string){
        const sp = spfi().using(SPFx(context));
        const list = sp.web.lists.getByTitle(titulo);    
        const r = await list.select("Id")();
        
        return r.Id;
    };
}

export default Sharepoint;
