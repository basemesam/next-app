import ContentSyles from "../styles/Home.module.css";
import ArticleItem from "./ArticleItem";
const ArticleLists = ({ articles }) => {
  const news = articles.news;
  return (
    <div className={ContentSyles.content}>
      {news.map(article => (
        <ArticleItem  key={article._id} article={article} />
      ))}
    </div>
  );
};
export default ArticleLists;
