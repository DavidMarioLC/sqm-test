"use client";

import React from "react";
import { useDebounce } from "@uidotdev/usehooks";
import { getSearchByTem } from "@/services/api";

export const useSearch = () => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [result, setResult] = React.useState({
    articlesAndEssay: [],
    products: [],
    videos: [],
    books: [],
  });

  const onChange = (value) => {
    setSearchTerm("");
    setResult({
      articlesAndEssay: [],
      products: [],
      videos: [],
      books: [],
    });
    setError(false);

    setSearchTerm(value);
  };

  const cleanSearch = () => {
    setSearchTerm("");
  };

  const debouncedSearchTerm = useDebounce(searchTerm, 1000);

  React.useEffect(() => {
    if (debouncedSearchTerm) {
      setLoading(true);
      async function getDataApi() {
        const data = await getSearchByTem(debouncedSearchTerm, "mx", "es");

        if (data?.error) {
          setLoading(false);
          setError(true);
          setResult({
            articlesAndEssay: [],
            products: [],
            videos: [],
            books: [],
          });
        } else {
          setResult({
            ...result,
            articlesAndEssay: data.essays,
            products: data.products,
            books: data.bookspn,
            videos: data.videospn,
          });
          setError(false);
          setLoading(false);
        }
      }
      getDataApi();
    } else {
      setResult({
        articlesAndEssay: [],
        products: [],
        videos: [],
        books: [],
      });
      setError(false);
    }
  }, [debouncedSearchTerm]);

  return {
    searchTerm,

    onChange,
    result,
    error,
    cleanSearch,
    loading,
  };
};
