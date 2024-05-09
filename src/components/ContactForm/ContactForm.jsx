"use client";

import React from "react";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Row from "react-bootstrap/Row";
import { Button } from "../Button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import "./custom.css";
import { BsEnvelope } from "react-icons/bs";

import { Link } from "@/navigation";
import { useLocale } from "next-intl";

import { sendMail } from "@/services/api";

export const ContactForm = () => {
  const locale = useLocale();

  const [userData, setUserData] = React.useState({
    names: "",
    "last-name": "",
    business: "",
    ocupation: "Distribuitor",
    country: "Mexico",
    email: "",
    office: "Chile",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);
  const [formMessage, setFormMessage] = React.useState("");
  const [fields, setFields] = React.useState([]);

  const handleSubmit = async (event) => {
    setLoading(true);
    event.preventDefault();
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    const { status, message, invalid_fields } = await sendMail(userData);
    setFormMessage(message);

    if (status === "validation_failed") {
      setLoading(false);
      setError(true);
      setFields([...invalid_fields]);
    } else {
      setLoading(false);
      setError(false);
      setFields([]);
      setUserData({
        names: "",
        "last-name": "",
        business: "",
        ocupation: "Distribuitor",
        country: "Mexico",
        email: "",
        office: "Chile",
        subject: "",
        message: "",
      });
    }
  };

  return (
    <div style={{ maxWidth: 800, marginInline: "auto" }} className={` py-5`}>
      <div className="d-flex flex-column justify-center align-items-center text-center text-md-start flex-md-row gap-md-5  pb-5 ">
        <BsEnvelope size={80} color="#A5A5A7" />

        <div>
          <h2 className="text-xl  lg:text-2xl">
            Envíanos un mensaje y te responderemos a la brevedad
          </h2>
          <p className="mb-0">Enviaremos una copia de este mensaje a tu correo</p>
        </div>
      </div>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="6" controlId="validationCustom01">
            <FloatingLabel controlId="floatingInput" label="Nombre*" className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Nombre"
                name="names"
                value={userData.names}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              {fields.length > 0 && fields.find((item) => item.field === "names") && (
                <Form.Control.Feedback className="d-block text-danger">
                  {fields.find((item) => item.field === "names").message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom02">
            <FloatingLabel controlId="floatingInput" label="Apellido*" className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Apellido"
                name="last-name"
                value={userData["last-name"]}
                onChange={(e) => {
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  });
                }}
              />
              {fields.length > 0 && fields.find((item) => item.field === "lastname") && (
                <Form.Control.Feedback className="d-block text-danger">
                  {fields.find((item) => item.field === "lastname").message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom03">
            <FloatingLabel controlId="floatingInput" label="Empresa*" className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Empresa"
                name="business"
                value={userData.business}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              {fields.length > 0 && fields.find((item) => item.field === "business") && (
                <Form.Control.Feedback className="d-block text-danger">
                  {fields.find((item) => item.field === "business").message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom04">
            <FloatingLabel controlId="floatingSelectGrid" label="Ocupación*" className="mb-3">
              <Form.Select
                required
                aria-label="Ocupación"
                name="ocupation"
                value={userData.ocupation}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  })
                }
              >
                <option value="Distribuidor">Distribuidor</option>
                <option value="Consultor">Consultor</option>
                <option value="Agricultor">Agricultor</option>
                <option value="Gerente general">Gerente general</option>
                <option value="Investigador cientifico">Investigador cientifico</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Otro">Otro</option>
              </Form.Select>

              {fields.length > 0 && fields.find((item) => item.field === "ocupation") && (
                <Form.Control.Feedback className="d-block text-danger">
                  {fields.find((item) => item.field === "ocupation").message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom05">
            <FloatingLabel controlId="floatingSelectGrid" label="Pais*" className="mb-3">
              <Form.Select
                required
                aria-label="Pais"
                name="country"
                value={userData.country}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  })
                }
              >
                <option value="Mexico">Mexico</option>
                <option value="Perú">Perú</option>
                <option value="Argentina">Argentina</option>
              </Form.Select>
              {fields.length > 0 && fields.find((item) => item.field === "country") && (
                <Form.Control.Feedback className="d-block text-danger">
                  {fields.find((item) => item.field === "country").message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="6" controlId="validationCustom06">
            <FloatingLabel controlId="floatingInput" label="Correo electrónico*" className="mb-3">
              <Form.Control
                required
                type="email"
                placeholder="email"
                name="email"
                value={userData.email}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              {fields.length > 0 && fields.find((item) => item.field === "email") && (
                <Form.Control.Feedback className="d-block text-danger">
                  {fields.find((item) => item.field === "email").message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom07">
            <FloatingLabel controlId="floatingSelectGrid" label="Oficina*" className="mb-3">
              <Form.Select
                required
                aria-label="Oficina"
                name="office"
                value={userData.office}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  })
                }
              >
                <option value="Chile">Chile</option>
                <option value="Brasil">Brasil</option>
                <option value="Ecuador">Ecuador</option>
                <option value="Perú">Perú</option>
                <option value="Suramérica">Suramérica</option>
                <option value="USA/Canadá">USA/Canadá</option>
                <option value="México">México</option>
                <option value="Centroamérica">Centroamérica</option>
                <option value="Europa">Europa</option>
                <option value="España">España</option>
                <option value="Medio Oriente">Medio Oriente</option>
                <option value="Africa del Sur">Africa del Sur</option>
                <option value="África del Norte">África del Norte</option>
                <option value="China">China</option>
                <option value="India">India</option>
                <option value="Japón">Japón</option>
                <option value="Sureste asiático y Oceanía">Sureste asiático y Oceanía</option>
              </Form.Select>
              {fields.length > 0 && fields.find((item) => item.field === "office") && (
                <Form.Control.Feedback className="d-block text-danger">
                  {fields.find((item) => item.field === "office").message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom08">
            <FloatingLabel controlId="floatingInput" label="Asunto*" className="mb-3">
              <Form.Control
                required
                type="text"
                placeholder="Asunto"
                name="subject"
                value={userData.subject}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              {fields.length > 0 && fields.find((item) => item.field === "subject") && (
                <Form.Control.Feedback className="d-block text-danger">
                  {fields.find((item) => item.field === "subject").message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>

          <Form.Group as={Col} md="12" controlId="validationCustom09">
            <FloatingLabel controlId="floatingInput" label="Comentarios*" className="mb-3">
              <Form.Control
                required
                style={{ height: "200px" }}
                as="textarea"
                placeholder="Comentarios"
                name="message"
                value={userData.message}
                onChange={(e) =>
                  setUserData({
                    ...userData,
                    [e.target.name]: e.target.value,
                  })
                }
              />
              {fields.length > 0 && fields.find((item) => item.field === "message") && (
                <Form.Control.Feedback className="d-block text-danger">
                  {fields.find((item) => item.field === "message").message}
                </Form.Control.Feedback>
              )}
            </FloatingLabel>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3">
          <Form.Check
            required
            className="form-radio-custom"
            label={
              <p>
                Doy el consentimiento para el tratamiento de mis datos. Estoy de acuerdo con el
                almacenamiento y uso de mis datos de acuerdo con las{" "}
                <Link
                  className="color-02 text-decoration-underline"
                  locale={locale}
                  href="/politicas-de-privacidad"
                >
                  políticas de privacidad
                </Link>
              </p>
            }
            feedback="Debes aceptar antes de enviar."
            feedbackType="invalid"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            required
            className="form-radio-custom"
            label="He leído y aceptado los términos y condiciones"
            feedback="Debes aceptar antes de enviar."
            feedbackType="invalid"
          />
        </Form.Group>

        <p className="text-center  text-md-start">
          {loading ? (
            <Button variant="solid" color="blue" className="px-56 gap-2 disabled" disabled>
              <AiOutlineLoading3Quarters className="button-loading-icon" />
              Enviando
            </Button>
          ) : (
            <Button variant="solid" color="blue" className="px-56 gap-2" type="submit">
              Enviar
            </Button>
          )}
        </p>
      </Form>
      <p className={`${error ? "text-danger" : "color-02"}`}>{formMessage && formMessage}</p>
    </div>
  );
};
