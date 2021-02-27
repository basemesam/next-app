import ArticleStyles from "../styles/Article.module.css";

const ArticleItem = ({ article }) => {
  //ISO Date Validation
  const d = new Date(article.created_at);
  const date = d.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    day: "numeric",
    month: "long"
  });
  const time = d.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false
  });

  return (
    <>
      <div className={ArticleStyles.article}>
        <div className={ArticleStyles.header}>
          <img src={article.source.url} alt="" />
          <h6>{article.source.title}</h6>
        </div>
        <div className={ArticleStyles.body}>
          <h1>{article.title}</h1>
          <h5>{`${date} At ${time}`}</h5>
        </div>
        <div className={ArticleStyles.keywords}>
          {article.keywords.map(keyword => (
            <span key={Math.random()}>{keyword.name}</span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ArticleItem;
