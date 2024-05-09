import React from "react";
import { ArticleCard } from "../ArticleCard";

export const GridArticlesRelated = ({ articles }) => {
  return articles.map((item) => (
    <div className="col-12 col-md-6 col-lg-4" key={item.id}>
      <ArticleCard
        link={item.link}
        image={item.image}
        title={item.title}
        category={item.category}
        tags={item.tags}
      />
    </div>
  ));
};
