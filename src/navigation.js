import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const locales = ["es", "en"];
export const localePrefix = "always"; // Default

// The `pathnames` object holds pairs of internal
// and external paths, separated by locale.
export const pathnames = {
  // If all locales use the same pathname, a
  // single external path can be provided.
  "/": "/",

  // If locales use different paths, you can
  // specify each external path per locale.
  "/marcas": {
    es: "/marcas",
    en: "/brands",
  },
  "/marcas/[marca]/[producto]": {
    es: "/marcas/[marca]/[producto]",
    en: "/brands/[marca]/[producto]",
  },
  "/aplicaciones": {
    es: "/aplicaciones",
    en: "/applications",
  },
  "/categorias": {
    es: "/categorias",
    en: "/categories",
  },
  "/yodo-en-nutricion-vegetal": {
    es: "/yodo-en-nutricion-vegetal",
    en: "/iodine-in-plant-nutrition",
  },
  "/academia-sqm": {
    es: "/academia-sqm",
    en: "/academy-sqm",
  },
  "/academia-sqm/todos-los-videos": {
    es: "/academia-sqm/todos-los-videos",
    en: "/academy-sqm/all-videos",
  },
  "/academia-sqm/videos": {
    es: "/academia-sqm/videos",
    en: "/academy-sqm/videos",
  },
  "/academia-sqm/videos/[video]": {
    es: "/academia-sqm/videos/[video]",
    en: "/academy-sqm/videos/[video]",
  },
  "/academia-sqm/libros": {
    es: "/academia-sqm/libros",
    en: "/academy-sqm/books",
  },
  "/academia-sqm/libros/[libro]": {
    es: "/academia-sqm/libros/[libro]",
    en: "/academy-sqm/books/[libro]",
  },
  "/articulos": {
    es: "/articulos",
    en: "/articles",
  },
  "/articulos/[articulo]": {
    es: "/articulos/[articulo]",
    en: "/articles/[articulo]",
  },
  "/cultivo-especial": {
    es: "/cultivo-especial",
    en: "/special-crop",
  },
  "/cultivo-especial/[cultivo]": {
    es: "/cultivo-especial/[cultivo]",
    en: "/special-crop/[cultivo]",
  },
  "/nuestros-expertos": {
    es: "/nuestros-expertos",
    en: "/our-experts",
  },
  "/nuestros-expertos/[experto]": {
    es: "/nuestros-expertos/[experto]",
    en: "/our-experts/[experto]",
  },
  "/agricultura-sostenible": {
    es: "/agricultura-sostenible",
    en: "/sustainable-agriculture",
  },
  "/agricultura-sostenible/expertis-internacional-y-altos-estándares-de-reporte": {
    es: "/agricultura-sostenible/expertis-internacional-y-altos-estándares-de-reporte",
    en: "/sustainable-agriculture/international-expertir-and-high-reporting-standards",
  },
  "/agricultura-sostenible/uso-eficiente-del-agua": {
    es: "/agricultura-sostenible/uso-eficiente-del-agua",
    en: "/sustainable-agriculture/efficient-use-of-water",
  },
  "/agricultura-sostenible/soluciones-de-origen-natural": {
    es: "/agricultura-sostenible/soluciones-de-origen-natural",
    en: "/sustainable-agriculture/solutions-of-natural-origin",
  },
  "/agricultura-sostenible/objetivos-medioambientales": {
    es: "/agricultura-sostenible/objetivos-medioambientales",
    en: "/sustainable-agriculture/environmental-objectives",
  },
  "/sqm-en-el-mundo": {
    es: "/sqm-en-el-mundo",
    en: "/sqm-in-the-world",
  },
  "/acerca-de-sqm": {
    es: "/acerca-de-sqm",
    en: "/about-sqm",
  },
  "/nutricion-vegetal-de-especialidad": {
    es: "/nutricion-vegetal-de-especialidad",
    en: "/specialty-vegetable-nutrition",
  },
  "/origen-del-nitrato-de-potasio": {
    es: "/origen-del-nitrato-de-potasio",
    en: "/origin-of-potassium-nitrate",
  },
  "/historia-del-salitre-el-nitrato-de-chile": {
    es: "/historia-del-salitre-el-nitrato-de-chile",
    en: "/history-of-saltpeter-nitrate-of-chile",
  },
  "/nuestra-historia": {
    es: "/nuestra-historia",
    en: "/our-history",
  },
  "/politicas-de-privacidad": {
    es: "/politicas-de-privacidad",
    en: "/privacy-policies",
  },
  "/politicas-de-cookies": {
    es: "/politicas-de-cookies",
    en: "/cookie-policies",
  },
  "/contacto": {
    es: "/contacto",
    en: "/contact",
  },
  "/distribuidores": {
    es: "/distribuidores",
    en: "/distributors",
  },
};

export const { Link, redirect, usePathname, useRouter, getPathname } = createLocalizedPathnamesNavigation({ locales, localePrefix, pathnames });
