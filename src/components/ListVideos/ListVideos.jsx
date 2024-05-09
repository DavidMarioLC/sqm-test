"use client";

import React from "react";
import { Button } from "@/components/Button";
import { IoFilter } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";
import { GridArticles } from "../GridArticles";
import { Pagination } from "../Pagination";
import { MultiSelect } from "react-multi-select-component";
import { CustomMultiSelect } from "../Form/CustomMultiSelect";
import { GridVideos } from "@/components/GridVideos";
import { GridSkeletonArticleCard } from "../Skeleton";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { getVideoCategoryFilter, getVideoCropFilter, getAllVideos } from "@/services/api";
import { useMediaQuery } from "@uidotdev/usehooks";
import { FilterModal, FilterModalHeader, FilterModalContent, FilterModalFooter } from "@/components/FilterModal";
import Accordion from "react-bootstrap/Accordion";
import { Checkbox, Select, Radio } from "../Form";

export const ListVideos = ({ language, country }) => {
  const isDesktop = useMediaQuery("(min-width : 768px)");

  return (
    <React.Fragment>
      {isDesktop ? <ListVideosDesktop language={language} country={country} /> : <ListVideosMobile language={language} country={country} />}
    </React.Fragment>
  );
};

export const ListVideosDesktop = ({ language, country }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  // paginations
  const page = Number(searchParams.get("page")) || 1;
  const [totalPages, setTotalPages] = React.useState(1);
  const [limit] = React.useState(12);
  // options selects
  const [categoryOptions, setCategoryOptions] = React.useState([]);
  const [cropOptions, setCropOptions] = React.useState([]);

  // option selected
  const [selectedCategory, setSelectedCategory] = React.useState([]);
  const [selectedCrop, setSelectedCrop] = React.useState([]);
  const [order, setOrder] = React.useState("asc");

  // videos
  const [allVideos, setVideos] = React.useState([]);

  // loading
  const [loading, setLoading] = React.useState(false);

  //filters actived
  const hasAnyFilterActive = selectedCategory.length > 0 || selectedCrop.length > 0;

  // clean filters
  const cleanFilters = () => {
    setSelectedCategory([]);
    setSelectedCrop([]);
  };

  // set page to '1'
  const setPageToOne = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  // filters
  React.useEffect(() => {
    getVideoCategoryFilter(language).then((response) => {
      const options = response.data.map((item) => ({
        id: item.id,
        label: item.title,
        value: item.slug,
      }));
      setCategoryOptions(options);
    });

    getVideoCropFilter(language).then((response) => {
      const options = response.data.map((item) => ({
        id: item.id,
        label: item.title,
        value: item.slug,
      }));

      setCropOptions(options);
    });
  }, []);

  // videos
  React.useEffect(() => {
    setLoading(true);

    const categories = selectedCategory.length > 0 ? selectedCategory.map((item) => item.value).join(",") : "all";
    const crops = selectedCrop.length > 0 ? selectedCrop.map((item) => item.value).join(",") : "all";

    const getAllVideosApi = async () => {
      const { data, error } = await getAllVideos(page, limit, order, crops, categories, language);

      setVideos(data.videos);
      setTotalPages(Math.ceil(data.total / limit));
      setLoading(false);
    };
    getAllVideosApi();
  }, [searchParams, selectedCategory, selectedCrop, order]);

  return (
    <React.Fragment>
      <div className=" gap-2 pb-3  pt-3 d-flex">
        <div className="">
          <p className="fw-bold">Categorías</p>
          <CustomMultiSelect
            options={categoryOptions}
            value={selectedCategory}
            onChange={(value) => {
              setSelectedCategory(value);
              setPageToOne();
            }}
          />
        </div>
        <div className="">
          <p className="fw-bold">Cultivos</p>
          <CustomMultiSelect
            options={cropOptions}
            value={selectedCrop}
            onChange={(value) => {
              setSelectedCrop(value);
              setPageToOne();
            }}
          />
        </div>
        <div className="">
          <p className="fw-bold">Ordenar por</p>
          <Select
            defaultValue={order}
            options={[
              { id: 1, label: "A - Z", value: "asc" },
              { id: 2, label: "Z - A", value: "desc" },
            ]}
            style={{ width: 286 }}
            onChange={setOrder}
          />
        </div>
      </div>
      {hasAnyFilterActive && (
        <div className="d-flex justify-content-end pb-4">
          <Button variant="ghost" color="green" onClick={cleanFilters}>
            Borrar filtros
          </Button>
        </div>
      )}
      {/* skeleton post */}
      {loading ? (
        <GridSkeletonArticleCard />
      ) : (
        <React.Fragment>
          {/* post */}
          <GridVideos videos={allVideos} />
          {totalPages > 1 && <Pagination totalPages={totalPages} page={page} />}
          {totalPages === 0 && <p className="py-5">No se ha encontrado resultados.</p>}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const ListVideosMobile = ({ language, country }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  // paginations
  const page = Number(searchParams.get("page")) || 1;
  const [totalPages, setTotalPages] = React.useState(1);
  const [limit] = React.useState(6);

  // videos
  const [allVideos, setVideos] = React.useState([]);

  // loading
  const [loading, setLoading] = React.useState(false);

  // options checkbox
  const [categoryOptions, setCategoryOptions] = React.useState({});
  const [cropOptions, setCropOptions] = React.useState({});

  //order
  const [order, setOrder] = React.useState("asc");

  const handleChangeOrderByValue = (event) => {
    setOrder(event.target.value);
  };

  // filter by modal
  const [openFilterBy, setOpenFilterBy] = React.useState(false);
  const handleOpenFilterBy = () => setOpenFilterBy(true);
  const handleCloseFilterBy = () => setOpenFilterBy(false);

  // order by modal
  const [openOrderBy, setOpenOrderBy] = React.useState(false);
  const handleOpenOrderBy = () => setOpenOrderBy(true);
  const handleCloseOrderBy = () => setOpenOrderBy(false);

  // get filtered
  const getFilters = (options) => {
    const filteredObject = Object.fromEntries(Object.entries(options).filter(([, value]) => value === true));
    const group = Object.keys(filteredObject);
    const result = group.join(",");

    return result;
  };

  //filters selected
  const categories = getFilters(categoryOptions) || "all";
  const crops = getFilters(cropOptions) || "all";

  // apply filter
  const showResults = async () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);

    const { data, error } = await getAllVideos(page, limit, order, crops, categories, language);

    setVideos(data.videos);
    setTotalPages(Math.ceil(data.total / limit));
    setLoading(false);
    handleCloseFilterBy();
    handleCloseOrderBy();
  };

  const resetFilters = (options) => {
    const resetOptions = { ...options };
    for (const key in resetOptions) {
      resetOptions[key] = false;
    }

    return resetOptions;
  };

  const deleteFilters = async () => {
    const categoryOptionReset = resetFilters(categoryOptions);
    const cropOptionReset = resetFilters(cropOptions);

    setCategoryOptions(categoryOptionReset);
    setCropOptions(cropOptionReset);
  };

  // filters
  React.useEffect(() => {
    getVideoCategoryFilter(language).then((response) => {
      const options = response.data.reduce((obj, item) => {
        obj[item.slug] = false;
        return obj;
      }, {});

      setCategoryOptions(options);
    });

    getVideoCropFilter(language).then((response) => {
      const options = response.data.reduce((obj, item) => {
        obj[item.slug] = false;
        return obj;
      }, {});

      setCropOptions(options);
    });
  }, []);

  React.useEffect(() => {
    setLoading(true);
    const getAllVideosApi = async () => {
      const { data, error } = await getAllVideos(page, limit, order, crops, categories, language);
      setVideos(data.videos);
      setTotalPages(Math.ceil(data.total / limit));
      setLoading(false);
    };
    getAllVideosApi();
  }, [searchParams]);

  const categoryOptionsList = Object.keys(categoryOptions);
  const cropOptionsList = Object.keys(cropOptions);

  return (
    <React.Fragment>
      <div className="d-flex gap-1 pb-4 pb-md-5 d-md-none">
        <Button onClick={handleOpenFilterBy} variant="solid" color="gray" className="rounded-0 rounded-start-2 px-4">
          <IoFilter />
          Filtrar por
        </Button>
        <Button onClick={handleOpenOrderBy} variant="solid" color="gray" className="rounded-0 rounded-end-2 px-4">
          <TbArrowsSort />
          Ordenar por
        </Button>
      </div>
      {/* filter by mobile */}
      <FilterModal open={openFilterBy} onClose={handleCloseFilterBy}>
        <FilterModalHeader>
          <p className="mb-0">Filtrar por</p>
        </FilterModalHeader>
        <FilterModalContent>
          <Accordion className="accordionFilters" defaultActiveKey="0" flush alwaysOpen>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Categorias</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-3">
                  {categoryOptionsList.map((option) => (
                    <Checkbox
                      key={option}
                      value={option}
                      checked={categoryOptions[option] === true}
                      onChange={(e) => {
                        setCategoryOptions({
                          ...categoryOptions,
                          [option]: e.target.checked,
                        });
                      }}
                    >
                      {option}
                    </Checkbox>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Cultivos</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-3">
                  {cropOptionsList.map((option) => (
                    <Checkbox
                      key={option}
                      value={option}
                      checked={cropOptions[option] === true}
                      onChange={(e) => {
                        setCropOptions({
                          ...cropOptions,
                          [option]: e.target.checked,
                        });
                      }}
                    >
                      {option}
                    </Checkbox>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </FilterModalContent>
        <FilterModalFooter>
          <Button variant="ghost" color="green" onClick={deleteFilters}>
            Borrar filtros
          </Button>
          <Button variant="solid" color="blue" className="px-3" onClick={showResults}>
            Mostrar resultados
          </Button>
        </FilterModalFooter>
      </FilterModal>

      {/* order by mobile */}
      <FilterModal open={openOrderBy} onClose={handleCloseOrderBy}>
        <FilterModalHeader>
          <p className="mb-0">Ordenar por</p>
        </FilterModalHeader>
        <FilterModalContent>
          <div className="vstack gap-4">
            <Radio name="order" value="asc" onChange={handleChangeOrderByValue} checked={order === "asc"}>
              <span className="text-dark">A - Z</span>
            </Radio>
            <Radio name="order" value="desc" onChange={handleChangeOrderByValue} checked={order === "desc"}>
              <span className="text-dark">Z - A</span>
            </Radio>
          </div>
        </FilterModalContent>
        <FilterModalFooter>
          <Button variant="ghost" color="green" onClick={deleteFilters}>
            Borrar filtros
          </Button>
          <Button variant="solid" color="blue" className="px-3" onClick={showResults}>
            Mostrar resultados
          </Button>
        </FilterModalFooter>
      </FilterModal>

      {/* skeleton post */}
      {loading ? (
        <GridSkeletonArticleCard />
      ) : (
        <React.Fragment>
          {/* post */}
          <GridVideos videos={allVideos} />
          {totalPages > 1 && <Pagination totalPages={totalPages} page={page} />}
          {totalPages === 0 && <p className="py-5">No se ha encontrado resultados.</p>}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
