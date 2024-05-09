"use client";
import "./style.css";
import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const AccordionCustom = ({ items }) => {
  return (
    <Accordion className="accordionCustom" defaultActiveKey="0" flush>
      {items.map((item, idx) => (
        <Accordion.Item key={item.id} eventKey={item.id}>
          <Accordion.Header>{item.titulo}</Accordion.Header>
          <Accordion.Body>{item.texto}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
