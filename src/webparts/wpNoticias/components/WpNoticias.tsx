import * as React from "react";
import { IWpNoticiasProps } from "../components/IWpNoticiasProps";
// import NoticeCard from "../components/NoticeCard"; // Componente para noticias principales
import ListCard from "../components/ListCard"; // Componente para "más leídas"
import Sharepoint from "../../../services/sharepoint";
import { I_Image } from "../../../interfaces/I_SharePoint";
import I_Noticia from "../../../interfaces/I_Noticias";
require("../assets/Css/style.css");

const WpNoticias: React.FC<IWpNoticiasProps> = ({
  spHttpClient,
  siteUrl,
  context,
}) => {
  const [newsNoticias, setNewsNoticias] = React.useState<I_Noticia[]>([]); // Almacena todas las noticias
  const [masLeidas, setMasLeidas] = React.useState<I_Noticia[]>([]); // Almacena las "más leídas"
  const [visibleNews, setVisibleNews]=React.useState(2);

  const handVerMas =() =>{
    setVisibleNews((prev) => prev + 2);
  }

  const handVerMenos = () =>{
    setVisibleNews(2);
  };

  // Función para cargar datos desde SharePoint
  React.useEffect(() => {
    Sharepoint.ObtenerLista<I_Noticia>(context, "Noticias").then((noticias) => {
      noticias.map((noticia) => {
        let imageUrl = "placeholder.png"; // Valor predeterminado para la imagen

        if (noticia.Image) {
          // Parsear el campo `Image` como JSON si es necesario
          const imageObj: I_Image = JSON.parse(noticia.Image);
          const idSitio =
            "5d6aa816-1978-40a3-9f7d-8e7170fd24af,ca04e35e-2ae2-4071-ab9b-274392be0f73";
          const idLista = "fe5da339-22f5-4cf3-8895-d395fd46e62c";
          imageUrl = `${siteUrl}/_api/v2.1/sites('${idSitio}')/lists('${idLista}')/items('${noticia.Id}')/attachments('${imageObj?.fileName}')/thumbnails/0/c200x200/content`;
        }
        noticia.ImageUrl = imageUrl;
      });
      // Divide las noticias entre principales y "más leídas"
      setNewsNoticias(noticias); // Todas las noticias
      setMasLeidas(noticias.slice(0, 5)); // Simula "más leídas" con las primeras 5
    });
  }, [spHttpClient, siteUrl]);

  return (
  <div className="newsContainer">
      <div className="newsMain">
        {newsNoticias.slice(0, visibleNews).map((noticia) => (
          <div className="noticeCard" key={noticia.Id}>
            <img
              className="noticeImage"
              src={noticia.ImageUrl} // Usa la URL de la imagen
              alt={noticia.Title}
            />
            <h4>{noticia.Title}</h4>
            <p>{noticia.Description}</p>
          </div>
        ))}
      </div>
      <div className="newsSidebar">
        <h3>MÁS LEÍDAS</h3>
        <ListCard newsNoticias={masLeidas} />
      </div>
      {/* Botones de Ver Más y Ver Menos */}
      <div className="newFooter">
        {visibleNews < newsNoticias.length && (
          <button className="verMas" onClick={handVerMas}>
            Ver más
          </button>
        )}
        {visibleNews > 2 && (
          <button className="verMenos" onClick={handVerMenos}>
            Ver menos
          </button>
        )}
      </div>
    </div>
  );
};

export default WpNoticias;
