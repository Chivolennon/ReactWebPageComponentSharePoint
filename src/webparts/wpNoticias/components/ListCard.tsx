import * as React from "react";
import I_Noticia from "../../../interfaces/I_Noticias";
require ("../assets/Css/style.css");

const ListCard: React.FC<{ newsNoticias: I_Noticia[] }> = ({ newsNoticias }) => {
  return (
    <ul className="listCard">
      {newsNoticias.map((noticia) => (
        <li key={noticia.Id} className="listItem">
          <a href="#" className="listLink">
            {noticia.Title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default ListCard;
