import type { Metadata } from "next";
import ArticleList from "@/components/ArticleList";
import articles from "@/data/articles";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays on engineering, leadership, and the craft of building software.",
};

export default function Writing() {
  return (
    <>
      <h1 className="page-title">Writing</h1>
      <p className="page-subtitle">
        This is where I share my thoughts on a variety of topics, from technical
        insights to leadership tips and everything in between. These pieces
        reflect my experiences, lessons learned, and ideas I’m passionate about.
        Enjoy the read!
      </p>
      <ArticleList articles={articles} />
    </>
  );
}
