"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { Accordion, Badge } from "react-bootstrap";
import { BsX } from "react-icons/bs";
import { Checkbox } from "@/components/Form";
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

const FilterBadges = ({ params }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Obtener los filtros activos
  const badges = params.reduce((acc, param) => {
    const values = searchParams.get(param);
    if (!values) return acc;

    const separatedValues = values.split(",");
    separatedValues.forEach((value) => acc.push({ param, value }));

    return acc;
  }, []);

  return (
    <div className="d-flex flex-wrap gap-1">
      {badges.map((filter) => (
        <Badge key={filter.value} className={style.optionsBadges}>
          <button
            onClick={() => toggleParamValue(filter.param, filter.value, router)}
            className={style.optionsBadgesButton}
          >
            <BsX size={18} />
          </button>
          <span>{filter.value}</span>
        </Badge>
      ))}
    </div>
  );
};

export function FilterPanelParams({ filters = [], badges = false }) {
  return (
    <aside className={style.filterPanel}>
      <p className={style.filterPanelTitle}>Filtrar por</p>

      {badges && (
        <FilterBadges params={filters.map((filter) => filter.param)} />
      )}

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
    </aside>
  );
}
