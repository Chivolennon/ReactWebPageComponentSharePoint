import * as React from 'react';
import type { IWpAvisosProps } from './IWpAvisosProps';
import I_Avisos from '../../../interfaces/I_Avisos';
// import { spfi } from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import Sharepoint from '../../../services/sharepoint';
import { I_Image } from '../../../interfaces/I_SharePoint';

const WpAvisos:React.FC<IWpAvisosProps> = ({siteUrl, context}) =>{
  const a ="hola"
  const [newAviso, setNewAviso] = React.useState<I_Avisos[]>([]); // Almacena los datos de Avisos


// Función para cargar datos desde SharePoint
React.useEffect(() => {
  Sharepoint.ObtenerLista<I_Avisos>(context, "Avisos").then((avisos) => {
    avisos.map((avisos) => {
      let imageUrl = "placeholder.png"; // Valor predeterminado para la imagen

      if (avisos.Image) {
        // Parsear el campo `Image` como JSON si es necesario
        const imageObj: I_Image = JSON.parse(avisos.Image);
        const idSitio =
          "5d6aa816-1978-40a3-9f7d-8e7170fd24af,ca04e35e-2ae2-4071-ab9b-274392be0f73";
        const idLista = "fe5da339-22f5-4cf3-8895-d395fd46e62c";
        imageUrl = `${siteUrl}/_api/v2.1/sites('${idSitio}')/lists('${idLista}')/items('${avisos.Id}')/attachments('${imageObj?.fileName}')/thumbnails/0/c200x200/content`;
      }
      avisos.ImageUrl = imageUrl;
    });
    setNewAviso(newAviso); // Todos los avisos.
  });
}, [context, siteUrl]);


  return(
    <div>
      $({a});
    </div>
  ); 
};
export default WpAvisos;