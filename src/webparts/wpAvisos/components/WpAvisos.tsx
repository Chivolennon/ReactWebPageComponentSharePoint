import * as React from "react";
import type { IWpAvisosProps } from "./IWpAvisosProps";
import I_Avisos from "../../../interfaces/I_Avisos";
import "@pnp/sp/webs";
import "@pnp/sp/lists";
import "@pnp/sp/items";
import Sharepoint from "../../../services/sharepoint";
import { I_Image } from "../../../interfaces/I_SharePoint";
import { getSP } from "../../../interfaces/I_SharePoint";
import { SPFI } from "@pnp/sp";

const WpAvisos: React.FC<IWpAvisosProps> = ({ siteUrl, context, sp: SPFI }) => {
  const [avisos, setAvisos] = React.useState<I_Avisos[]>([]); // Almacena de datos actuales
  const [error, setError] = React.useState<string | null>(null); // ID del nuevo item
  const [mensaje, setMensaje] = React.useState<string | null>(null);

  // Inicializa SPFI usando el contexto.
  const sp: SPFI = React.useMemo(() => getSP(context), [context]);

React.useEffect(() =>{
  const cargarAvisos = async () =>{
    try{
      // Obtener lista
      const data = await Sharepoint.ObtenerLista<I_Avisos>(context, "Avisos");

      //Procesar cada aviso para agregar su URL de imagen
      const avisoImg = data.map((aviso) =>{
        let imageUrl = "placeholder.png";

        if (aviso.Image){
          try{
            const imageObj: I_Image = JSON.parse(aviso.Image);
            const idSitio = "5d6aa816-1978-40a3-9f7d-8e7170fd24af,ca04e35e-2ae2-4071-ab9b-274392be0f73";
            const idLista = "fe5da339-22f5-4cf3-8895-d395fd46e62c";
            imageUrl = `${siteUrl}/_api/v2.1/sites('${idSitio}')/lists('${idLista}')/items('${aviso.Id}')/attachments('${imageObj?.fileName}')/thumbnails/0/c200x200/content`;
          }catch(err){
            console.error("Error al procesar la imagen", err);
          }
        }
        return{...aviso, imgageUrl: imageUrl};
      });
      setAvisos (avisoImg); // Actualiza la imagen
    }catch(err){
      console.error("Error al cargar la imagen:", err);
      setError("No se pudieron cargar los avisos.");
    }
  };
  cargarAvisos();
}, [context, siteUrl]);

  // Función para agregar un nuevo aviso a la lista
  const agregarAviso = async () => {
    const nuevoAviso: Partial<I_Avisos> = {
      Title: "Nuevo Aviso",
      Image: '{"fileName": "imagen.png"}',
      Price: 150,
      Date: new Date().toISOString(), // Fecha actual en formato ISO
    };

    try {
      const response = await sp.web.lists.getByTitle("Avisos").items.add(nuevoAviso);
      console.log("Aviso agregado:", response.data);

      // Actualiza localmente el estado
      setAvisos((prev) => [
        ...prev,
        { ...response.data, ImageUrl: "placeholder.png" }, // Asigna imagen por defecto
      ]);

      setMensaje(`Aviso creado con ID: ${response.data.Id}`);
    } catch (err) {
      console.error("Error al agregar aviso:", err);
      setError("No se pudo agregar el aviso.");
    }
  };

  return (
    <div>
      <h2>Lista de Avisos</h2>
      <button onClick={agregarAviso}>Agregar Aviso</button>
      {mensaje && <p style={{ color: "green" }}>{mensaje}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      <ul>
        {avisos.length > 0 ? (
          avisos.map((aviso) => (
            <li key={aviso.Id}>
              <strong>{aviso.Title}</strong> - ${aviso.Price} -{" "}
              {new Date(aviso.Date).toLocaleDateString()}
              <br />
              <img src={aviso.ImageUrl} alt="Imagen del Aviso" width="200" />
            </li>
          ))
        ) : (
          <p>No hay avisos disponibles.</p>
        )}
      </ul>
    </div>
  );
};
export default WpAvisos;
