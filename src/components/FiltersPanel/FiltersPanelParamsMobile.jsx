"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Accordion } from "react-bootstrap";
import { IoFilter } from "react-icons/io5";
import { Checkbox } from "@/components/Form";
import { Button } from "@/components/Button";
import {
  FilterModal,
  FilterModalContent,
  FilterModalHeader,
  FilterModalFooter,
} from "@/components/FilterModal";
import { toggleParamValue } from "@/helpers/queryParams";
import style from "./style.module.css";

const FilterDetails = ({ name, param, options }) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const selectedOptions = searchParams.get(param) ?? "";

  const handleFilterChange = (e) => {
    const { value } = e.target;

    // Actualizar query-params
    toggleParamValue(param, value, router);
  };

  return (
    <>
      <Accordion.Header>{name}</Accordion.Header>
      <Accordion.Body>
        <div className={`d-flex flex-column gap-3 ${style.optionsContainer}`}>
          {options.map((option) => (
            <Checkbox
              key={option.id}
              name={param}
              value={option.slug}
              checked={selectedOptions.includes(option.slug)}
              onChange={handleFilterChange}
            >
              {option.title}
            </Checkbox>
          ))}
        </div>
      </Accordion.Body>
    </>
  );
};

export function FilterPanelParamsMobile({ filters = []}) {
  const [togglePanel, setTogglePanel] = useState(false);

  const searchParams = useSearchParams();

  const deleteFilters = () => {
    const params = new URLSearchParams(searchParams.toString());

    filters.forEach((filter) => params.delete(filter.param));

    router.push(`?${params.toString()}`);
  };

  return (
    <article className="d-block d-md-none">
      <Button
        onClick={() => setTogglePanel(!togglePanel)}
        color="gray"
        variant="solid"
        className="rounded-0 rounded-start-2 mb-4 px-4"
      >
        <IoFilter />
        Filtrar por
      </Button>

      <FilterModal
        open={togglePanel}
        onClose={() => setTogglePanel(!togglePanel)}
      >
        <FilterModalHeader>
          <p className="mb-0">Filtrar por</p>
        </FilterModalHeader>
        <FilterModalContent>
          <Accordion
            flush
            alwaysOpen
            defaultActiveKey="0"
            className="accordionFilters"
          >
            {filters.map((filter, index) => (
              <Accordion.Item
                key={Date.now() * Math.random()}
                eventKey={index.toString()}
              >
                <FilterDetails
                  name={filter.name}
                  param={filter.param}
                  options={filter.options}
                />
              </Accordion.Item>
            ))}
          </Accordion>
        </FilterModalContent>
        <FilterModalFooter>
          <Button variant="ghost" color="green" onClick={deleteFilters}>
            Borrar filtros
          </Button>
          <Button
            variant="solid"
            color="blue"
            className="px-3"
            onClick={() => setTogglePanel(false)}
          >
            Mostrar resultados
          </Button>
        </FilterModalFooter>
      </FilterModal>
    </article>
  );
}
