"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMediaQuery } from "@uidotdev/usehooks";
import { TbArrowsSort } from "react-icons/tb";
import { Radio } from "@/components/Form";
import { Button } from "@/components/Button";
import { FilterModal, FilterModalContent, FilterModalFooter, FilterModalHeader } from "@/components/FilterModal";

import style from "./style.module.css";

function SortFilter({ options = [], defaultValue = "" }) {
  const [toggleOrder, setToggleOrder] = useState(false);

  const router = useRouter();
  const searchParams = useSearchParams();
  const isDesktop = useMediaQuery("(min-width : 768px)");

  const currentSort = searchParams.get("sort") || defaultValue;

  const handleSort = (e) => {
    const { value } = e.target;

    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);

    router.push(`?${params.toString()}`);
  };

  const deleteSortFilters = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("sort");

    router.push(`?${params.toString()}`);
  };

  return isDesktop ? (
    <article className="d-flex align-items-center gap-3 mb-4">
      <label htmlFor="sortOptions" className="fw-medium">
        Ordenar por
      </label>
      <select name="sort" id="sortOptions" onChange={handleSort} className={`pe-5 ps-3 py-2 ${style.sortFilterBox}`}>
        <option value="" disabled hidden selected>
          Filtrar...
        </option>
        {options.length &&
          options.map((option) => (
            <option key={option.value} value={option.value} defaultChecked={currentSort === option.value}>
              {option.text}
            </option>
          ))}
      </select>
    </article>
  ) : (
    <>
      <Button onClick={() => setToggleOrder(!toggleOrder)} color="gray" variant="solid" className="rounded-0 rounded-end-2 mb-4 px-4">
        <TbArrowsSort />
        Ordenar por
      </Button>

      <FilterModal open={toggleOrder} onClose={() => setToggleOrder(!toggleOrder)}>
        <FilterModalHeader>
          <p className="mb-0">Ordenar por</p>
        </FilterModalHeader>
        <FilterModalContent>
          <div className="vstack gap-4">
            {options.length &&
              options.map((option) => (
                <Radio key={option.value} name="order" value={option.value} onChange={handleSort} checked={currentSort === option.value}>
                  <span className="text-dark">{option.text}</span>
                </Radio>
              ))}
          </div>
        </FilterModalContent>
        <FilterModalFooter>
          <Button variant="ghost" color="green" onClick={deleteSortFilters}>
            Borrar filtros
          </Button>
          <Button variant="solid" color="blue" className="px-3" onClick={() => setToggleOrder(false)}>
            Mostrar resultados
          </Button>
        </FilterModalFooter>
      </FilterModal>
    </>
  );
}
export default SortFilter;
