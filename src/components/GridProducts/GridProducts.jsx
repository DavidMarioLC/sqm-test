import React from "react";
import { ProductCard } from "../ProductCard";

export const GridProducts = ({ products }) => {
  const parsedProducts = products.map((product) => ({
    id: product.id,
    name: product.title,
    image: product.image,
    brand: {
      name: product.brand[0],
      image: product.brandImage,
    },
    link: product.link,
    href: `/marcas/${product.brand[0]}/${product.link.url}`,
  }));
  
  return (
    <div className="container">
      <section className="row g-3">
        {parsedProducts.map((item) => (
          <div className="col-12 col-md-4" key={item.id}>
            <ProductCard
              name={item.name}
              image={item.image}
              brand={item.brand}
              link={item.link}
              href={item.href}
            />
          </div>
        ))}
      </section>
    </div>
  );
};
