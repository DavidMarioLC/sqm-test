import React from "react";
import { CategoryCard } from "@/components/CategoryCard";

export const GridCategories = ({ categories }) => {
  return categories.map((item) => (
    <div className="col-12 col-lg-4" key={item.id}>
      <CategoryCard title={item.title} image={item.image ?? "/fallback-product.png"} link={item.slug} />
    </div>
  ));
};
