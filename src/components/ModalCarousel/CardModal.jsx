import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button } from "../Button";
import style from "./cardModal.module.css";
import { Title } from "../Title";

export const CardModal = ({ image, title, description }) => {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <article className={style.card}>
        <div className={style.wrapperImage}>
          <img src={image} className={style.image} />
        </div>
        <section className={style.content}>
          <h3 className={style.title}>{title}</h3>
          <p className="d-grid col-12 col-md-10">
            <Button variant="outline" color="blue" onClick={handleShow}>
              Conocer más
            </Button>
          </p>
        </section>
      </article>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header className="border-bottom-0" closeButton></Modal.Header>
        <Modal.Body className="px-4 py-4 p-md-5 ">
          <Title level={3} align="center" className="mb-4">
            {title}
          </Title>
          <img src={image} className="w-100 mb-5" />
          <p>{description}</p>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};
