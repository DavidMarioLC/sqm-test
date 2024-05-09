"use client";

import React from "react";
import { Button } from "@/components/Button";
import { IoFilter } from "react-icons/io5";
import { TbArrowsSort } from "react-icons/tb";
import { GridArticles } from "../GridArticles";
import { Pagination } from "../Pagination";
import { MultiSelect } from "react-multi-select-component";
import { Checkbox, Select, Radio } from "../Form";
import { CustomMultiSelect } from "../Form/CustomMultiSelect";
import { GridBooks } from "@/components/GridBooks";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FilterModal, FilterModalHeader, FilterModalContent, FilterModalFooter } from "@/components/FilterModal";
import { getBookTagFilters, getAllBooks } from "@/services/api";
import { GridSkeletonBookCard } from "../Skeleton";
import { useMediaQuery } from "@uidotdev/usehooks";
import Accordion from "react-bootstrap/Accordion";
export const ListBooks = ({ language, country }) => {
  const isDesktop = useMediaQuery("(min-width : 768px)");

  return (
    <React.Fragment>
      {isDesktop ? <ListBooksDesktop language={language} country={country} /> : <ListBooksMobile language={language} country={country} />}
    </React.Fragment>
  );
};

export const ListBooksDesktop = ({ language, country }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  // paginations
  const page = Number(searchParams.get("page")) || 1;
  const [totalPages, setTotalPages] = React.useState(1);
  const [limit] = React.useState(12);
  // options selects
  const [tagOptions, setTagOptions] = React.useState([]);
  // option selected
  const [selectedTags, setSelectedTags] = React.useState([]);
  const [order, setOrder] = React.useState("asc");

  // books
  const [allBooks, setAllBooks] = React.useState([]);

  // loading
  const [loading, setLoading] = React.useState(false);

  //filters actived
  const hasAnyFilterActive = selectedTags.length > 0;

  // clean filters
  const cleanFilters = () => {
    setSelectedTags([]);
  };

  // set page to '1'
  const setPageToOne = () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);
  };

  // filters
  React.useEffect(() => {
    getBookTagFilters(language).then((response) => {
      const options = response.data.map((item) => ({
        id: item.id,
        label: item.title,
        value: item.slug,
      }));

      setTagOptions(options);
    });
  }, []);

  // posts
  React.useEffect(() => {
    setLoading(true);
    const tags = selectedTags.length > 0 ? selectedTags.map((item) => item.value).join(",") : "all";

    const getAllBooksApi = async () => {
      const { data, error } = await getAllBooks(page, limit, order, tags, language);

      setAllBooks(data.books);
      setTotalPages(Math.ceil(data.total / limit));
      setLoading(false);
    };
    getAllBooksApi();
  }, [searchParams, selectedTags, order]);

  return (
    <React.Fragment>
      <div className=" gap-2 pb-3  pt-3 d-flex ">
        <div className="">
          <p className="fw-bold">Etiquetas</p>
          <CustomMultiSelect
            options={tagOptions}
            value={selectedTags}
            onChange={(value) => {
              setSelectedTags(value);
              setPageToOne();
            }}
          />
        </div>
        <div className="">
          <p className="fw-bold">Ordenar por</p>
          <Select
            style={{ width: "200px" }}
            defaultValue={order}
            options={[
              { id: 1, label: "A - Z", value: "asc" },
              { id: 2, label: "Z - A", value: "desc" },
            ]}
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
        <GridSkeletonBookCard />
      ) : (
        <React.Fragment>
          {/* post */}
          <GridBooks books={allBooks} />
          {totalPages > 1 && <Pagination totalPages={totalPages} page={page} />}
          {totalPages === 0 && <p className="py-5">No se ha encontrado resultados.</p>}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export const ListBooksMobile = ({ language, country }) => {
  const pathname = usePathname();
  const { replace } = useRouter();
  const searchParams = useSearchParams();
  // paginations
  const page = Number(searchParams.get("page")) || 1;
  const [totalPages, setTotalPages] = React.useState(1);
  const [limit] = React.useState(6);

  // books
  const [allBooks, setAllBooks] = React.useState([]);

  // loading
  const [loading, setLoading] = React.useState(false);

  // options checkbox
  const [tagOptions, setTagOptions] = React.useState({});

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
  const tags = getFilters(tagOptions) || "all";

  // apply filter
  const showResults = async () => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    replace(`${pathname}?${params.toString()}`);

    const { data, error } = await getAllBooks(page, limit, order, tags, language);

    setAllBooks(data.books);
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
    const tagsOptionReset = resetFilters(tagOptions);
    setTagOptions(tagsOptionReset);
  };

  // filters
  React.useEffect(() => {
    getBookTagFilters(language).then((response) => {
      const options = response.data.reduce((obj, item) => {
        obj[item.slug] = false;
        return obj;
      }, {});

      setTagOptions(options);
    });
  }, []);

  React.useEffect(() => {
    setLoading(true);
    const getAllPostApi = async () => {
      const { data, error } = await getAllBooks(page, limit, order, tags, language);

      setAllBooks(data.books);
      setTotalPages(Math.ceil(data.total / limit));
      setLoading(false);
    };
    getAllPostApi();
  }, [searchParams]);

  const tagOptionsList = Object.keys(tagOptions);

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
              <Accordion.Header>Etiquetas</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-3">
                  {tagOptionsList.map((option) => (
                    <Checkbox
                      key={option}
                      value={option}
                      checked={tagOptions[option] === true}
                      onChange={(e) => {
                        setTagOptions({
                          ...tagOptions,
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
        <GridSkeletonBookCard />
      ) : (
        <React.Fragment>
          {/* post */}
          <GridBooks books={allBooks} />
          {totalPages > 1 && <Pagination totalPages={totalPages} page={page} />}
          {totalPages === 0 && <p className="py-5">No se ha encontrado resultados.</p>}
        </React.Fragment>
      )}
    </React.Fragment>
  );
};
