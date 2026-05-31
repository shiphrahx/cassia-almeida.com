import ArticleList from "@/components/ArticleList";
import articles from "@/data/articles";

export default function Writing() {
  return (
    <>
      <h1 className="page-title">Writing</h1>
      <p className="page-subtitle">
        Essays, guides, and notes on engineering leadership, building software, and the occasional reflection.
      </p>
      <ArticleList articles={articles} />
    </>
  );
}
