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
  // const sp = React.useMemo(() => getSP(context), [context]);
  const [error, setError] = React.useState<string | null>(null); // ID del nuevo item
  const [newAviso, setNewAviso] = React.useState<string | null>(null);

  // Inicializa SPFI usando el contexto.
  const sp: SPFI = React.useMemo(() => getSP(context), [context]);

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
    });
  }, [context, siteUrl]);

  // Función para agregar un nuevo item
  const agregarAviso = async () => {
    const nuevoAviso: Partial<I_Avisos> = {
      Title: "Nuevo Aviso",
      Description: "Descripción de ejemplo",
      Image: "imagen.png",
      ImageUrl: "https://example.com/imagen.png",
      Category: "General",
    };

    try {
      const response = await sp.web.lists
        .getByTitle("Avisos")
        .items.add(nuevoAviso);
      console.log("Aviso agregado:", response.data);
      setNewAviso(`Nuevo aviso creado con ID: ${response.data.Id}`);
      setAvisos((prev) => [...prev, response.data]); // Actualiza localmente
    } catch (err) {
      console.error("Error al agregar aviso", err);
      setError("No se pudo agregar el aviso.");
    }
  };

  return (
    <div>
      <h2>Lista de Avisos</h2>
      <button onClick={agregarAviso}>Agregar Aviso</button>
      {newAviso && <p>{newAviso}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <ul>
        {avisos.map((aviso) => (
          <li key={aviso.Id}>
            <strong>{aviso.Title}</strong> - {aviso.Description} -{" "}
            {aviso.Category}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default WpAvisos;
