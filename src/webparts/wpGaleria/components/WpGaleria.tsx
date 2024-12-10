import * as React from "react";
require("../assets/Css/style.css");
import { IWpGaleriaProps } from "../components/IWpGaleriaProps";
import I_Galeria from "../../../interfaces/i_Galeria";
import Sharepoint from "../../../services/sharepoint";
import { I_Image } from "../../../interfaces/I_SharePoint";

const WpGaleria: React.FC<IWpGaleriaProps> = ({
  siteUrl,
  context,
}) => {
  const [allData, setAllData] = React.useState<I_Galeria[]>([]);
  const [sliderContent, setSliderContent] = React.useState<I_Galeria[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);
  const [activeCategory, setActiveCategory] = React.useState("Videos");

  // Cargar todos los datos de la lista de SharePoint
  React.useEffect(() => {
    Sharepoint.ObtenerLista<I_Galeria>(context, "Galeria").then((galeria) => {
      Sharepoint.ObtenerIdLista(context, "Galeria").then((idLista) =>{
        const idSitio =
          "5d6aa816-1978-40a3-9f7d-8e7170fd24af,ca04e35e-2ae2-4071-ab9b-274392be0f73";
          galeria.map((galeria) => {
            let imageUrl = "placeholder.png";
            if (galeria.Image) {
              const imageObj: I_Image = JSON.parse(galeria.Image);
            imageUrl = `${siteUrl}/_api/v2.1/sites('${idSitio}')/lists('${idLista}')/items('${galeria.Id}')/attachments('${imageObj?.fileName}')/thumbnails/0/c200x200/content`;
            }
            galeria.ImageUrl = imageUrl;
          });
          setAllData(galeria); // Almacena todos los datos de la lista
      });
    });
  }, [context, siteUrl]);


  // Filtrar datos por categoría seleccionada
  React.useEffect(() => {
    const filteredData = allData.filter(
      (galeria) => galeria.Category === activeCategory
    );
    setSliderContent(filteredData);
    setCurrentItemIndex(0); // Reinicia el índice al cambiar de categoría
  }, [activeCategory, allData]);

  return (
    <div className="containerGal">
      {/* Columna izquierda */}
      <div className="leftGal">
        {/* Imagen */}
        <div className="imageContainer">
          {sliderContent.length > 0 ? (
            <img
              src={sliderContent[currentItemIndex]?.ImageUrl || ""}
              alt={sliderContent[currentItemIndex]?.Title || ""}
              className="slider-image"
            />
          ) : (
            <p>No hay contenido disponible.</p>
          )}
        </div>
        {/* Botones de categorías */}
        <div className="categoryBarLeft">
          <ul className="commandBarContainerGal">
            <li onClick={() => setActiveCategory("Videos")}>Videos</li>
            <li onClick={() => setActiveCategory("Fotos")}>Fotos</li>
            <li onClick={() => setActiveCategory("Revistas")}>Revistas</li>
            <li onClick={() => setActiveCategory("Diario")}>Diario</li>
          </ul>
        </div>
        {/* Descripción */}
        <div className="descriptionContainer">
          {sliderContent.length > 0 ? (
            <>
              <h3>{sliderContent[currentItemIndex]?.Title}</h3>
              <p>{sliderContent[currentItemIndex]?.Description}</p>
            </>
          ) : (
            <p>No hay contenido disponible.</p>
          )}
        </div>
      </div>

      {/* Columna derecha */}
      <div className="rightGal">
        {/* Secciones adicionales */}
        <div className="sections">
          <div className="itemGal">A</div>
          <div className="itemGal">B</div>
          <div className="itemGal">C</div>
          <div className="itemGal">D</div>
        </div>
      </div>
    </div>
  );
};

export default WpGaleria;