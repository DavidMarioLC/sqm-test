"use client";

import React from "react";

import { ArticlesCarousel } from "@/components/ArticlesCarousel";
import { useTranslations } from "next-intl";
export const FeaturedArticlesCarousel = ({ articles, categories }) => {
  const t = useTranslations("FeaturedArticles");
  const [selectedCategory, setSelectedCategory] = React.useState("");

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const filteredArticles = selectedCategory
    ? articles.filter((article) => article.category.toLowerCase() === selectedCategory.toLowerCase())
    : articles;

  return (
    <React.Fragment>
      <div className="filter-articles">
        <button className={`pill ${selectedCategory === "" ? "pill--active" : ""} `} onClick={() => handleCategorySelect("")}>
          {t("viewAllCategories")}
        </button>
        {categories.map((item) => (
          <button
            key={item.id}
            onClick={() => handleCategorySelect(item.value)}
            className={`pill ${selectedCategory === item.value ? "pill--active" : ""}`}
          >
            {item.name}
          </button>
        ))}
      </div>
      <ArticlesCarousel articles={filteredArticles} />
    </React.Fragment>
  );
};
