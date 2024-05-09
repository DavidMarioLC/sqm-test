"use client";
import "./style.css";
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import parse from "html-react-parser";
export const AccordionCrops = ({ items }) => {
  return (
    <Accordion className="accordionCrops" defaultActiveKey="0" flush>
      {items.map((item, idx) => (
        <Accordion.Item key={item.id} eventKey={idx}>
          <Accordion.Header>{item.title}</Accordion.Header>
          <Accordion.Body>{parse(`${item.text}`)}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};
