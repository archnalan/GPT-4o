import "./article.css";
import PropTypes from "prop-types";

const Article = ({ imageUrl, date, title }) => {
  return (
    <div className="gpt4o__blog-container_article">
      <div className="gpt4o__blog-container_article-image">
        <img src={imageUrl} alt="blog" />
      </div>
      <div className="gpt4o__blog-container_article-content">
        <p>{date}</p>
        <h3>{title}</h3>
      </div>
    </div>
  );
};

Article.propTypes = {
  imageUrl: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};

export default Article;
