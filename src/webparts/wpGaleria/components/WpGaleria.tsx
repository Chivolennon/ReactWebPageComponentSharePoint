import * as React from "react";
require("../assets/Css/style.css");
import { IWpGaleriaProps } from "../components/IWpGaleriaProps";
import I_Galeria from "../../../interfaces/i_Galeria";
import Sharepoint from "../../../services/sharepoint";
import { I_Image } from "../../../interfaces/I_SharePoint";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const WpGaleria: React.FC<IWpGaleriaProps> = ({ siteUrl, context }) => {
  const [allData, setAllData] = React.useState<I_Galeria[]>([]);
  const [sliderContent, setSliderContent] = React.useState<I_Galeria[]>([]);
  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);
  const [activeCategory, setActiveCategory] = React.useState("Videos");

  // Cargar todos los datos de la lista de SharePoint
  React.useEffect(() => {
    Sharepoint.ObtenerLista<I_Galeria>(context, "Galeria").then((galeria) => {
      Sharepoint.ObtenerIdLista(context, "Galeria").then((idLista) => {
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
  }, []);

  const setCategoria = (categoria: string)=>{
    
    const filteredData = allData.filter(
      (galeria) => galeria.Category === categoria
    );
    setSliderContent(filteredData);
    setCurrentItemIndex(0);
    setActiveCategory(categoria);
  }

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

  return (
    <div className="containerGal">
      {/* Columna izquierda */}
      <div className="leftGal">
        {/* Imagen */}
        <div className="imageContainer">
          {sliderContent.length > 0 ? (
            <Slider {...settings}>
              {sliderContent.map((galeria, index) => (
                <div key={index}>
                  <img
                    src={galeria.ImageUrl || ""}
                    alt={galeria.Title || ""}
                    className="slider-image"
                  />
                </div>
              ))}
            </Slider>
          ) : (
            <p>No hay contenido disponible.</p>
          )}
        </div>
        {/* Botones de categorías */}
        <div className="categoryBarLeft">
          <ul className="commandBarContainerGal">
            <li className={ activeCategory == "Videos" ? "jejej" : "" } onClick={() => setCategoria("Videos")}>Videos</li>
            <li onClick={() => setCategoria("Fotos")}>Fotos</li>
            <li onClick={() => setCategoria("Revistas")}>Revistas</li>
            <li onClick={() => setCategoria("Diario")}>Diario</li>
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
