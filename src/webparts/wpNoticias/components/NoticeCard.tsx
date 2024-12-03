import * as React from "react";
import I_Noticia from "../../../interfaces/I_Noticias";
require ("../assets/Css/style.css");

const NoticeCard: React.FC<{ news: I_Noticia }> = ({ news }) => {
  return (
    <div className="noticeCard">
      <img src={news.ImageUrl} alt={news.Title} className="noticeImage" />
      <div className="noticeContent">
        <h2>{news.Title}</h2>
        <p>{news.Description}</p>
        <small>{news.Date}</small>
      </div>
    </div>
  );
};

export default NoticeCard;
