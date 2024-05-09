"use client";

import React from "react";
import style from "./style.module.css";
import { Checkbox } from "@/components/Form";
import Accordion from "react-bootstrap/Accordion";

export const FiltersPanel = ({ applications = [], categories = [], crops = [], brands = [] }) => {
  const allApplicationOptions = applications.reduce((obj, item) => {
    obj[item.slug] = false;
    return obj;
  }, {});

  const allCategoryOptions = categories.reduce((obj, item) => {
    obj[item.slug] = false;
    return obj;
  }, {});

  const allCropOptions = crops.reduce((obj, item) => {
    obj[item.slug] = false;
    return obj;
  }, {});

  const allBrandOptions = brands.reduce((obj, item) => {
    obj[item.slug] = false;
    return obj;
  }, {});

  const [applicationOptions, setApplicationOptions] = React.useState(allApplicationOptions);
  const [categoryOptions, setCategoryOptions] = React.useState(allCategoryOptions);
  const [cropOptions, setCropOptions] = React.useState(allCropOptions);
  const [brandOptions, setBrandOptions] = React.useState(allBrandOptions);

  React.useEffect(() => {}, [applicationOptions, categoryOptions, cropOptions, brandOptions]);

  return (
    <React.Fragment>
      <aside className={style.filterPanel}>
        <p className={style.filterPanelTitle}>Filtrar por</p>
        <Accordion className="accordionFilters" defaultActiveKey="0" flush alwaysOpen>
          {applications.length > 0 && (
            <Accordion.Item eventKey="0">
              <Accordion.Header>Aplicaciones</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-3">
                  {applications.map((option) => (
                    <Checkbox
                      key={option.slug}
                      value={option.slug}
                      checked={applicationOptions[option.slug] === true}
                      onChange={(e) => {
                        setApplicationOptions({
                          ...applicationOptions,
                          [option.slug]: e.target.checked,
                        });
                      }}
                    >
                      {option.title}
                    </Checkbox>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}

          {categories.length > 0 && (
            <Accordion.Item eventKey="1">
              <Accordion.Header>Por Categoria</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-3">
                  {categories.map((option) => (
                    <Checkbox
                      key={option.slug}
                      value={option.slug}
                      checked={categoryOptions[option.slug] === true}
                      onChange={(e) => {
                        setCategoryOptions({
                          ...categoryOptions,
                          [option.slug]: e.target.checked,
                        });
                      }}
                    >
                      {option.title}
                    </Checkbox>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}

          {crops.length > 0 && (
            <Accordion.Item eventKey="2">
              <Accordion.Header>Por Cultivo</Accordion.Header>
              <Accordion.Body>
                <div className={`d-flex flex-column gap-3 ${style.maxHeigth}`}>
                  {crops.map((option) => (
                    <Checkbox
                      key={option.slug}
                      value={option.slug}
                      checked={cropOptions[option.slug] === true}
                      onChange={(e) => {
                        setCropOptions({
                          ...cropOptions,
                          [option.slug]: e.target.checked,
                        });
                      }}
                    >
                      {option.title}
                    </Checkbox>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}

          {brands.length > 0 && (
            <Accordion.Item eventKey="3">
              <Accordion.Header>Marca de producto</Accordion.Header>
              <Accordion.Body>
                <div className="d-flex flex-column gap-3">
                  {brands.map((option) => (
                    <Checkbox
                      key={option.slug}
                      value={option.slug}
                      checked={brandOptions[option.slug] === true}
                      onChange={(e) => {
                        setBrandOptions({
                          ...brandOptions,
                          [option.slug]: e.target.checked,
                        });
                      }}
                    >
                      {option.title}
                    </Checkbox>
                  ))}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          )}
        </Accordion>
      </aside>
    </React.Fragment>
  );
};
