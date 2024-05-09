import React from "react";
import { BlogCard } from "@/components/BlogCard";

export const GridPost = ({ articles }) => {
  return (
    <div className="row g-4">
      {articles.map((item, idx) => (
        <div className="col-sm-12 col-md-4 " key={item.id}>
          <BlogCard
            title={item.title}
            description={item.description}
            author={item.author}
            category={item.category}
            slug={item.slug}
            tags={item.tags}
            image={item.image}
          />
        </div>
      ))}
    </div>
  );
};
