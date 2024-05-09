import React from "react";
import { BrandCard } from "../BrandCard";

export const GridBrands = ({ brands }) => {
  return (
    <div className="container">
      <section className="row g-3">
        {brands.map((item) => (
          <div className="col-12 col-lg-3" key={item.id}>
            <BrandCard
              name={item.name}
              image={item.image}
              brand={item.taxonomy}
              link={item.link}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
