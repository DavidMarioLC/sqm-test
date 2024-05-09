/**************************
 * header
 **************************/

/* header mobile */
export const getHeaderMobile = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/header?country=${country}&type=movil&wpml_language=${language}`);
  const data = await response.json();
  return data;
};

/* header desktop */
export const getHeaderDesktop = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/header?country=${country}&type=desktop&wpml_language=${language}`);
  const data = await response.json();
  return data;
};

//search
export const getSearchByTem = async (term, country, language) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/search/${term}?country=${country}&wpml_language=${language}`);
  const data = await response.json();
  return data;
};
//countries client
export const getContinentsAndCountries = async (country = "MX", language = "es") => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/menu-countries?country=${country}&wpml_language=${language}`);

  const data = await response.json();

  return data;
};
//countries server
export const getContinentsAndCountriesServer = async (country = "MX", language = "es") => {
  if (language !== "_next") {
    const response = await fetch(`${process.env.SQM_API_URL}/countries/menu-countries?country=${country}&wpml_language=${language}`);
    const data = await response.json();

    return data;
  }
};

//languages client
export const getLanguages = async (language = "es") => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/languages?wpml_language=${language}`);
    const data = await response.json();
    return data;
  } catch (error) {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/languages?wpml_language=${language}`);
    const data = await response.json();
    return data;
  }
};
// languages server
export const getLanguagesServer = async (language = "es") => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/languages?wpml_language=${language}`);
    const data = await response.json();
    return data;
  } catch (error) {
    return {
      error: true,
    };
  }
};

// footer
export const getFooter = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/footer?country=${country}&wpml_language=${language}`);
  const data = await response.json();
  return data;
};

/**************************
 * home
 **************************/

export const getHeroCarousel = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/hero-carousel/home?country=${country}&wpml_language=${language}`);
  const json = await response.json();
  const data = json[0].carousel;
  return data;
};

export const getBrandsCarousel = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/carousel-products/home?country=${country}&wpml_language=${language}`);
  const json = await response.json();
  const data = json[0].brands;
  return data;
};

export const getApplicationCarousel = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/carousel-products/home?country=${country}&wpml_language=${language}`);
  const json = await response.json();
  const data = json[1].applications;
  return data;
};

export const getInformationCards = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/section-cards/home?country=${country}&wpml_language=${language}`);
  const json = await response.json();
  const data = json[0].data;
  return data;
};

export const getCampaignBanner = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/banner-product/home?country=${country}&wpml_language=${language}`);
  const json = await response.json();
  const data = json[0].data;
  return data;
};

export const getFeaturedArticles = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/section-featured/home?country=${country}&wpml_language=${language}`);
  const json = await response.json();
  const data = json[0].essay;
  return data;
};

export const getFeaturedVideos = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/section-featured/home?country=${country}&wpml_language=${language}`);
  const json = await response.json();
  const data = json[1].videospn;
  return data;
};

export const getMostViewArticles = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/section-featured/home?country=${country}&wpml_language=${language}`);
  const json = await response.json();
  const data = json[2].essay;
  return data;
};

/**************************
 * marcas
 **************************/

/* banner marca and description */
export const getBrandBannerAndDescription = async (brand, country, language) => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/brand/brand-description/${brand}?country=${country}&wpml_language=${language}`);
    const data = await response.json();

    if (data.length === 0) throw Error();

    return {
      data: data[0],
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};
/* carousel product line */
export const getBrandProductLine = async (brand, country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/brand/products-line/${brand}?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  return data[0];
};

/* carousel product list */
export const getBrandProductList = async (brand, country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/brand/product-list/${brand}?country=${country}&wpml_language=${language}`);
  let data = await response.json();

  return data;
};
/* carousel brands logos */
export const getBrandLogos = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/brand/brands-logos?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  return data;
};
/**************************
 * single product
 **************************/

/* product detail */
export const getProductDetails = async (product, country, language) => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/product/product-info/${product}?country=${country}&wpml_language=${language}`);
    const data = await response.json();
    if (data.length === 0) throw Error();

    return {
      data: data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

/* compatibility */
export const getCompatibility = async (product, country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/product/product-compatibility/${product}?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  return data;
};

/* compatibility result*/
export const getCompatibilityResults = async (product, country, language, products) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_SQM_API_URL}/product/product-compatibility-result/${product}?country=${country}&product_compare=${products}&wpml_language=${language}`
  );
  const data = await response.json();

  return data;
};

/* related products */

export const getRelatedProducts = async (product, country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/product/product-related/${product}?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  return data;
};

/* banner distribuitor */
export const getDistributorBanner = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/product/product-banner-distribuitor?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  return data;
};

/* related video */

export const getVideosRelated = async (product, country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/product/videos-product-related/${product}?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  return data;
};

/* articles related */

export const getArticlesRelated = async (product, country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/product/related-articles/${product}?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  return data;
};

/* contact banner */

export const getContactBanner = async (language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/product/product-banner-contact?wpml_language=${language}`);
  const data = await response.json();

  return data;
};

/**************************************
 * brands, applications and categories
 **************************************/

/* brands */
export const getBrands = async (page, limit, order, country, language) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/brand/tax-paginated?pagina=${page}&por_pagina=${limit}&taxonomia=brands&orden=${order}&country=${country}&wpml_language=${language}`
  );
  const data = await response.json();

  return data;
};

/* applications */

export const getApplications = async (page, limit, order, country, language) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/brand/tax-paginated?pagina=${page}&por_pagina=${limit}&taxonomia=applications&orden=${order}&country=${country}&wpml_language=${language}`
  );
  const data = await response.json();

  return data;
};

/* categories */

export const getCategories = async (page, limit, order, country, language) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/brand/tax-paginated?pagina=${page}&por_pagina=${limit}&taxonomia=categoryspn&orden=${order}&country=${country}&wpml_language=${language}`
  );
  const data = await response.json();

  return data;
};

/**************************************
 * aplications, categories (checkboxs)
 **************************************/

export const getCheckboxOptions = async (country, language, taxonomy) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/product/filter-taxonomy?country=${country}&taxonomia=${taxonomy}&wpml_language=${language}`
  );
  const data = await response.json();

  return data;
};

/**************************************
 * single cultivos
 **************************************/

/**************************************
 * distributor
 **************************************/

export const getBannerDistributor = async (language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/distribuitor/distribuitor-header?wpml_language=${language}`);
  const data = await response.json();

  return data;
};

export const getCountryAndCities = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/distribuitor/distribuitor-city?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  return data;
};

export const getDistributors = async (country, city, language) => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/distribuitor?country=${country}&city=${city}&wpml_language=${language}`);
  const data = await response.json();

  return data;
};

/**************************************
 * yodo
 **************************************/
export const getYodoPage = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/yodo?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  const newData = {
    banner: {
      title: data["0"].title,
      subtitle: data["0"].subTitle,
      isBackground: data["0"].isbackground ? true : false,
      image: data["0"].image,
    },
    firstContent: data["1"].content,
  };

  return newData;
};

export const getVideosRelatedYodo = async (language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/yodo/yodo-related-videos?keywords=yodo&wpml_language=${language}`);
  const data = await response.json();

  return data;
};

export const getProductRelatedYodo = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/yodo/yodo-related-product?country=${country}&keywords=yodo&wpml_language=${language}`);
  const data = await response.json();

  return data;
};

export const getArticlesRelatedYodo = async (page, limit, language) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/yodo/yodo-related-articles?keywords=yodo&pagina=${page}&por_pagina=${limit}&wpml_language=${language}`
  );
  const data = await response.json();

  return data;
};

/**************************
 * agricultura sostenible
 **************************/

export const getAgriculturePage = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/agricultura-sostenible?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  const newData = {
    banner: {
      title: data["0"].title,
      subtitle: data["0"].subTitle,
      isBackground: data["0"].isbackground ? true : false,
      image: data["0"].image,
    },
    pilars: [...data.subLinks],
    firstContent: data["1"].content,
    secondContent: data["2"].content,
    accordion: [...data["3"].accordeon],
  };

  return newData;
};

// uso-eficiente-del-agua
export const getEfficientUseOfWater = async (country, language) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/page/agricultura-sostenible_uso-eficiente-del-agua?country=${country}&wpml_language=${language}`
  );
  const data = await response.json();

  const newData = {
    banner: {
      title: data[0].title,
      subtitle: data[0].subtitle,
      isBackground: data[0].isbackground,
      image: data[0].image,
      color: data[0].color,
    },
    firstContent: data[1].content,
    carousel: {
      title: data[2].title,
      items: [...data[2].cards],
    },
    accordion: {
      title: data[3].title,
      items: [...data[3].accordeon],
    },
    pilars: [...data.subLinks],
  };

  return newData;
};

// objetivos-mediambientales
export const getObjectives = async (country, language) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/page/agricultura-sostenible_objetivos-medioambientales?country=${country}&wpml_language=${language}`
  );
  const data = await response.json();

  const newData = {
    banner: {
      title: data[0].title,
      subtitle: data[0].subTitle,
      isBackground: data[0].isbackground,
      image: data[0].image,
      color: data[0].color,
    },
    firstContent: data[1].content,
    accordion: {
      title: data[2].title,
      items: [...data[2].accordeon],
    },
    pilars: [...data.subLinks],
  };

  return newData;
};

//solucion natural

export const getNaturalSolution = async (country, language) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/page/agricultura-sostenible_soluciones-de-origen-natural?country=${country}&wpml_language=${language}`
  );
  const data = await response.json();

  const newData = {
    banner: {
      title: data[0].title,
      subtitle: data[0].subTitle,
      isBackground: data[0].isbackground,
      image: data[0].image,
      color: data[0].color,
    },
    firstContent: data[1].content,
    pilars: [...data.subLinks],
  };

  return newData;
};

// expertis-internacional
export const getExpertisInternational = async (country, language) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/page/agricultura-sostenible_expertis-internacional-y-altos-estandares-de-reporte?country=${country}&wpml_language=${language}`
  );
  const data = await response.json();

  const newData = {
    banner: {
      title: data[0].title,
      subtitle: data[0].subTitle,
      isBackground: data[0].isbackground,
      image: data[0].image,
      color: data[0].color,
    },
    firstContent: data[1].content,
    certifications: {
      title: data[2].title,
      items: [...data[2].documents],
    },
    otherCertifications: {
      title: data[3].title,
      items: [...data[3]["info-document"]],
    },
    pilars: [...data.subLinks],
  };

  return newData;
};

/**************************
 * single cultivo especial
 **************************/

// single crop
export const getSingleCrop = async (slug, country, language) => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/crop?country=${country}&cultivo=${slug}&wpml_language=${language}`);
    const [data] = await response.json();
    if (!data) {
      throw Error();
    }
    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// related articles
export const getSingleCroopRelatedArticles = async (slug, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/crop/related-articles?cultivo=${slug}&wpml_language=${language}`);
  const data = await response.json();

  const newData = data.map((item) => ({
    id: item.id,
    title: item.title,
    link: {
      url: item.slug,
      target: "_blank",
    },
    image: item.image,
    category: item.brand.title,
    tags: item.keywords.map((item) => ({ id: item.id, name: item.title })),
  }));

  return newData;
};

// related videos
export const getSingleCroopRelatedVideos = async (slug, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/crop/related-videos?cultivo=${slug}&wpml_language=${language}`);
  const data = await response.json();

  return data;
};
// related products
export const getSingleCroopRelatedProducts = async (slug, country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/crop/related-products?country=${country}&cultivo=${slug}&wpml_language=${language}`);
  const data = await response.json();

  const newData = data.map((item) => ({
    id: item.id,
    name: item.title,
    title: item.title,
    slug: item.slug,
    image: item.image,
    brand: {
      name: item.brand.title,
      slug: item.brand.slug,
      image: item.brand.image,
    },
    crops: {
      title: item.brand.title,
      slug: item.brand.slug,
      image: item.brand.image,
    },
    link: {
      slug: item.brand.slug,
      target: "_blank",
      text: "ver productos",
    },
  }));

  return newData;
};

/**************************
 * Sobre SQM
 **************************/

// about sqm
export const getAboutSQMPage = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/acerca-de-sqm?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  const newData = {
    banner: {
      title: data[0].title,
      subtitle: data[0].subTitle,
      isBackground: data[0].isbackground,
      image: data[0].image,
      color: data[0].color,
    },
    firstContent: data[1].content,
    cards: {
      title: data[2].title,
      description: data[2].text,
      items: data[2].cards.map((item) => ({
        id: item.id,
        title: item.titulo,
        image: item.imagen,
      })),
    },
  };

  return newData;
};

//nutricion-vegetal-de-especialidad

export const getSpecialNutritionPage = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/sqm-plant-nutrition?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  const newData = {
    banner: {
      title: data[0].title,
      subtitle: data[0].subTitle,
      isBackground: data[0].isbackground,
      image: data[0].image,
      color: data[0].color,
    },
    firstContent: data[1].content,
  };

  return newData;
};

//origen-del-nitrato-de-potasio

export const getOriginPage = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/origen-del-nitrato-de-potasio?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  const newData = {
    banner: {
      title: data[0].title,
      subtitle: data[0].subTitle,
      isBackground: data[0].isbackground,
      image: data[0].image,
      color: data[0].color,
    },
    firstContent: data[1].content,
    cards: {
      title: data[2].title,
      items: data[2].cards.map((item) => ({
        id: item.id,
        image: item.imagen,
        title: item.titulo,
        description: item.texto,
      })),
    },
    secondContent: data[3].content,
  };

  return newData;
};

//historia del salitre

export const getHistorySalitrePage = async (country, language) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/page/historia-del-salitre-el-nitrato-de-chile?country=${country}&wpml_language=${language}`
  );
  const data = await response.json();

  const newData = {
    banner: {
      title: data[0].title,
      subtitle: data[0].subTitle,
      isBackground: data[0].isbackground,
      image: data[0].image,
      color: data[0].color,
    },
    firstContent: data[1].content,
  };

  return newData;
};

// nuestra-historia
export const getOursHistoryPage = async (country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/page/nuestra-historia?country=${country}&wpml_language=${language}`);
  const data = await response.json();

  const newData = {
    banner: {
      title: data[0].title,
      subtitle: data[0].subTitle,
      isBackground: data[0].isbackground,
      image: data[0].image,
      color: data[0].color,
    },
    firstContent: data[1].content,
    timeLine: {
      title: data[2].title,
      items: data[2].cards.map((item) => ({
        id: item.id,
        year: item.titulo,
        title: item.subtitulo,
        description: item.texto,
        image: item.imagen,
      })),
    },
  };

  return newData;
};

/**************************
 * ACADEMIA SQM
 **************************/

/* single video */

export const getSingleVideo = async (slug, language) => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/video/single-video/${slug}?wpml_language=${language}`);
    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

/**************************
 * CONTACT FORM
 **************************/

export const sendMail = async (clientData) => {
  const formData = new URLSearchParams({
    names: clientData.names,
    "last-name": clientData["last-name"],
    business: clientData.business,
    country: clientData.country,
    ocupation: clientData.ocupation,
    email: clientData.email,
    office: clientData.office,
    subject: clientData.subject,
    message: clientData.message,
    wpml_language: "es",
  });

  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/contact/send-mail`, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    });
    const data = await response.json();

    return data;
  } catch (error) {
    return {
      error: error,
    };
  }
};

/**************************
 * SINGLE BOOK
 **************************/

export const getSingleBookPage = async (slug, language) => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/book/single-book/${slug}?wpml_language=${language}`);
    const [data] = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

export const getRelatedBookSingle = async (language) => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/book/books-featured?wpml_language=${language}`);

    const data = await response.json();

    const newData = data.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      category: item.keywords.length > 0 ? item.keywords[0].title : "",
      linkDownload: item.pdf,
      slug: item.link.url,
    }));

    return {
      newData,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

export const getSingleBookRelatedProducts = async (slug, language) => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/book/related-product?book=${slug}&wpml_language=${language}`);

    const json = await response.json();

    const data = json.map((item) => ({
      id: item.id,
      name: item.title,
      image: item.image,
      brand: {
        name: item.crops.title,
        image: item.crops.image,
        slug: item.crops.slug,
      },
      link: {
        slug: item.slug,
        target: "_blank",
        text: "ver productos",
      },
    }));

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

/**************************
 *  BLOG
 **************************/

export const getSingleBlogPage = async (slug, country, language) => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/blog/single-blog/${slug}?country=${country}&wpml_language=${language}`);

    const json = await response.json();

    if (json.length > 0) {
      return {
        json,
        error: false,
      };
    } else {
      return { json, error: true };
    }
  } catch (error) {
    return {
      error: true,
    };
  }
};

// single blog related articles

export const getSingleBlogRelatedNew = async (slug, language) => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/blog/related-blog?noticia=${slug}&wpml_language=${language}`);

    const json = await response.json();

    const data = json.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      description: item.resume,
      category: item.category.length > 0 ? item.category[0].title : "",
      slug: item.link.url,
      tags: item.tags.map((e) => ({ id: e.id, name: e.title })),
      author: {
        image: item.autors.length > 0 ? item.autors[0].image : "",
        name: item.autors.length > 0 ? item.autors[0].title : "",
        ocupation: item.autors.length > 0 ? item.autors[0].ocupation : "",
      },
    }));

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

/**************************
 *  ARTICLE
 **************************/
//single article desktop
export const getSingleArticlePageDesktop = async (slug, country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/essay/single-essay/${slug}?country=${country}&type=desktop&wpml_language=${language}`);

  const json = await response.json();

  if (json.length > 0) {
    return {
      data: json[0],
      error: false,
    };
  } else {
    return { json, error: true };
  }
};

// single article mobile
export const getSingleArticlePageMobile = async (slug, country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/essay/single-essay/${slug}?country=${country}&type=movil&wpml_language=${language}`);

  const json = await response.json();

  if (json.length > 0) {
    return {
      data: json[0],
      error: false,
    };
  } else {
    return { json, error: true };
  }
};

// related articles

export const getSingleRelatedArticle = async (slug, country, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/essay/related-essay?article=${slug}&wpml_language=${language}`);

  const json = await response.json();

  const newData = json.map((item) => ({
    id: item.id,
    image: item.image,
    title: item.title,
    link: {
      url: item.link.url,
    },
    category: item.category.length > 0 ? item.category[0].title : "",
    tags: item.tags.map((item) => ({ id: item.id, name: item.title })),
  }));

  if (json.length > 0) {
    return {
      data: newData,
      error: false,
    };
  } else {
    return { json, error: true };
  }
};

// related products

export const getSingleRelatedProduct = async (slug, country, language) => {
  const response = await fetch(
    `${process.env.SQM_API_URL}/essay/related-product?article=${slug}&wpml_language=${language}
    `
  );

  const json = await response.json();

  const newData = json.map((item) => ({
    id: item.id,
    title: item.name,
    name: item.name,
    image: item.image,
    brand: {
      name: item.brand[0].name,
      image: item.brand[0].image,
      slug: item.brand[0].slug,
    },
    crops: {
      name: item.brand[0].name,
      image: item.brand[0].image,
      slug: item.brand[0].slug,
    },
    link: {
      slug: item.slug,
      target: "_blank",
      text: "ver productos",
    },
  }));

  if (json.length > 0) {
    return {
      data: newData,
      error: false,
    };
  } else {
    return { json, error: true };
  }
};

/**************************
 *  EXPERTS
 **************************/
export const getSingleExpertPage = async (slug, language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/blog/autor-single-blog?autor=${slug}&wpml_language=${language}`);

  const json = await response.json();

  if (json.length > 0) {
    return {
      data: json[0],
      error: false,
    };
  } else {
    return { json, error: true };
  }
};

export const getOursExperts = async (language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/blog/autors?wpml_language=${language}`);

  const data = await response.json();

  if (data.length > 0) {
    return {
      data: data,
      error: false,
    };
  } else {
    return { json, error: true };
  }
};

/**************************
 *  VIDEOS
 **************************/
export const getFeaturedVideosPage = async (language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/video/videos-featured?wpml_language=${language}`);

  const json = await response.json();

  const newData = json.map((item) => ({
    id: item.id,
    image: item.image,
    category: item.category.title,
    title: item.title,
    description: "autor + ocupation",
    slug: item.slug,
  }));

  if (json.length > 0) {
    return {
      data: newData,
      error: false,
    };
  } else {
    return { json, error: true };
  }
};

// get last videos
export const getLastVideosPage = async (language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/video/last-videos?orden=desc&wpml_language=${language}`);

  const json = await response.json();

  const newData = json.map((item) => ({
    id: item.id,
    image: item.image,
    category: item.category.title,
    title: item.title,
    description: item.resume,
    slug: item.slug,
  }));

  if (json.length > 0) {
    return {
      data: newData,
      error: false,
    };
  } else {
    return { json, error: true };
  }
};

// video categories

export const getVideoCategoriesPage = async (language) => {
  const response = await fetch(`${process.env.SQM_API_URL}/video/video-categories?wpml_language=${language}`);

  const json = await response.json();

  const newData = json.map((item, idx) => ({
    id: idx + 1,
    image: item.image,
    title: item.title,
    description: item.description,
    slug: item.slug,
    buttonText: "Ver todos los videos",
  }));

  if (json.length > 0) {
    return {
      data: newData,
      error: false,
    };
  } else {
    return { json, error: true };
  }
};

export const getVideoFeaturedPageAcademy = async (language) => {
  try {
    const response = await fetch(`${process.env.SQM_API_URL}/book/books-featured?wpml_language=${language}`);

    const json = await response.json();

    const data = json.map((item) => ({
      id: item.id,
      title: item.title,
      image: item.image,
      category: item.keywords.length > 0 ? item.keywords[0].title : "",
      linkDownload: item.pdf,
      slug: item.link.url,
    }));

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

/**************************
 *  PAGE BLOG  FILTERS
 **************************/
//all post

export const getBlogPosts = async (country, page, limit, order, category, tag, author, language) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SQM_API_URL}/blog?country=${country}&pagina=${page}&por_pagina=${limit}&orden=${order}&category=${category}&tag=${tag}&autor=${author}&wpml_language=${language}`
    );
    const [json] = await response.json();
    const data = {
      page: json.page,
      total: json.total,
      posts: json.blogs.map((item) => ({
        id: item.id,
        title: item.title,
        image: item.image,
        description: item.resume,
        category: item.category.length > 0 ? item.category[0].title : "",
        slug: item.link.url,
        tags: item.tags.map((e) => ({ id: e.id, name: e.title })),
        author: {
          image: item.autors.length > 0 ? item.autors[0].image : "",
          name: item.autors.length > 0 ? item.autors[0].title : "",
          ocupation: item.autors.length > 0 ? item.autors[0].ocupation : "",
        },
      })),
    };

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// category
export const getBlogCategoryFilter = async (language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/blog/tax-blog?taxonomy=category&wpml_language=${language}`);

    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// authors
export const getBlogAuthorFilter = async (language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/blog/tax-blog?taxonomy=autors&wpml_language=${language}`);

    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

//tags
export const getBlogTagFilter = async (language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/blog/tax-blog?taxonomy=post_tag&wpml_language=${language}`);

    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

/**************************
 *  PAGE ARTICLES  FILTERS
 **************************/
// crops
export const getArticleCropsFilter = async (language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/essay/tax-essay?taxonomy=crops&wpml_language=${language}`);

    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// nutrients
export const getArticleNutrientsFilter = async (language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/essay/tax-essay?taxonomy=nutrients&wpml_language=${language}`);

    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// tags
export const getArticleTagFilter = async (language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/essay/tax-essay?taxonomy=keywords&wpml_language=${language}`);

    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// all articles
export const getArticlesPost = async (country, page, limit, order, crops, nutrients, tags, language) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SQM_API_URL}/essay?country=${country}&pagina=${page}&por_pagina=${limit}&orden=${order}&crops=${crops}&keywords=${tags}&nutrients=${nutrients}&wpml_language=${language}`
    );
    const [json] = await response.json();

    const data = {
      page: json.page,
      total: json.total,
      articles: json.Essays.map((item) => ({
        id: item.id,
        link: {
          url: item.link.url,
          target: item.link.target,
        },
        image: item.image,
        title: item.title,
        category: item.nutrients.length > 0 ? item.nutrients[0].title : "Sin categoria",
        tags: item.keywords.map((item) => ({ id: item.id, name: item.title })),
      })),
    };

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

/**************************
 *  PAGE VIDEOS FILTERS
 **************************/

// category
export const getVideoCategoryFilter = async (language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/video/video-categories?wpml_language=${language}`);

    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// crops
export const getVideoCropFilter = async (language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/video/video-crop?wpml_language=${language}`);

    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// all videos
export const getAllVideos = async (page, limit, order, crops, categories, language) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SQM_API_URL}/video?pagina=${page}&por_pagina=${limit}&orden=${order}&crops=${crops}&categories=${categories}&wpml_language=${language}`
    );
    const [json] = await response.json();

    const data = {
      page: json.page,
      total: json.total,
      videos: json.videos.map((item) => ({
        id: item.id,
        image: item.image,
        category: item.categories.length > 0 ? item.categories[0].title : "sin categoria",
        title: item.title,
        description: item.resume,
        slug: item.link.url,
      })),
    };

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

/**************************
 *  PAGE BOOK FILTERS
 **************************/

// category
export const getBookTagFilters = async (language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/book/tax-book?taxonomy=tagsspn&wpml_language=${language}`);

    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// all
export const getAllBooks = async (page, limit, order, tags, language) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_SQM_API_URL}/book?pagina=${page}&por_pagina=${limit}&orden=${order}&keywords=${tags}&wpml_language=${language}`
    );
    const [json] = await response.json();

    const data = {
      page: json.page,
      total: json.total,
      books: json.books.map((item) => ({
        id: item.id,
        image: item.image,
        category: item.keywords.length > 0 ? item.keywords[0].title : "Sin categoria",
        title: item.title,
        linkDownload: item.pdf,
        slug: item.link.url,
      })),
    };

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

export const getFilteredProducts = async (page, limit, order, country, language, filters) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_SQM_API_URL}/`;

  const url = new URL("product/products-filter-taxonomy/", baseUrl);

  url.searchParams.append("pagina", page);
  url.searchParams.append("por_pagina", limit);
  url.searchParams.append("orden", order);
  url.searchParams.append("country", country);
  url.searchParams.append("wpml_language", language);

  url.searchParams.append("crop", filters["crops"] ?? "all");
  url.searchParams.append("brand", filters["brands"] ?? "all");
  url.searchParams.append("category", filters["categories"] ?? "all");
  url.searchParams.append("application", filters["applications"] ?? "all");

  try {
    const res = await fetch(url.href);

    if (!res.ok) throw res;

    const data = await res.json().then((res) => res[0]);

    return data;
  } catch (error) {
    console.log(error);
  }
};

// Get All Categories
export const getCategoriesSPN = async (
  country,
  language
) => {
  const baseUrl = `${process.env.NEXT_PUBLIC_SQM_API_URL}/`;

  const url = new URL("product/filter-taxonomy/", baseUrl);

  url.searchParams.append("country", country);
  url.searchParams.append("wpml_language", language);
  url.searchParams.append("taxonomia", 'categoryspn');

  try {
    const res = await fetch(url.href);

    if (!res.ok) throw res;

    const data = await res.json().then((res) => res);

    return data;
  } catch (error) {
    console.log(error);
  }
};

/**************************
 *  PRIVACITY AND COOKIES
 **************************/

// privacity
export const getPagePrivacity = async (country, language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/page/politicas-de-privacidad?country=${country}&wpml_language=${language}`);

    const [data] = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// cookies

export const getPageCookies = async (country, language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/page/politicas-de-cookies?country=${country}&wpml_language=${language}`);

    const [data] = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};

// 404
export const getPageNotFound = async (language) => {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_SQM_API_URL}/404?wpml_language=${language}`);

    const data = await response.json();

    return {
      data,
      error: false,
    };
  } catch (error) {
    return {
      error: true,
    };
  }
};
