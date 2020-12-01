import react from "react";
import "./NewsComp.css";
import { Link } from "react-router-dom";

const NewsComp = ({ link, content, image, title, description, author }) => {
  return (
    <div className="news_">
      <div className="news_first">
        <div className="new">
          <h1>{title}</h1>
        </div>
        <div className="news_second">
          <img src={image} alt="" />
        </div>
        <div className="news_third">
          <p>{description}</p>
          <p>{content}</p>
          <a href={link}>{author}</a>
        </div>
      </div>
    </div>
  );
};
export default NewsComp;
