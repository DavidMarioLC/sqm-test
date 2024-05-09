import React from "react";
import { ArticleCard } from "../ArticleCard";

export const GridArticles = ({ articles }) => {
  return (
    <div className="row g-4">
      {articles.map((item) => (
        <div className="col-sm-12 col-md-4 " key={item.id}>
          <ArticleCard link={item.link} image={item.image} title={item.title} category={item.category} tags={item.tags} />
        </div>
      ))}
    </div>
  );
};
