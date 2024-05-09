import React from "react";

import { BookCard } from "@/components/BookCard";

export const GridBooks = ({ books }) => {
  return (
    <div className="row g-4">
      {books.map((item) => (
        <div className="col-sm-12 col-md-4 " key={item.id}>
          <BookCard image={item.image} category={item.category} title={item.title} linkDownload={item.linkDownload} slug={item.slug} />
        </div>
      ))}
    </div>
  );
};
