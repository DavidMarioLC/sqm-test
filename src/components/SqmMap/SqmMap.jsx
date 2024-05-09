"use client";

import React from "react";
import Script from "next/script";
import { Button } from "../Button";

import { Title } from "../Title";

export const SqmMap = () => {
  const [mapId, setMapId] = React.useState("4");

  const handleButton = (value) => {
    setMapId(value);

    window.localStorage.setItem("mapId", value);

    window.location.reload();
  };

  React.useEffect(() => {
    const mapIdStored = window.localStorage.getItem("mapId");
    if (mapIdStored) {
      setMapId(mapIdStored);
    }
  }, []);

  return (
    <React.Fragment>
      <div className="container py-5">
        <div className="row">
          <div className="col-12 col-md-5 order-md-2 ">
            <Title level={2} className="mb-3 mb-md-5">
              Conozca nuestras oficinas en el mundo
            </Title>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
              <Button variant="outline" className={`${mapId === "10" ? "bg-02 text-white" : ""}`} color="blue" onClick={() => handleButton("10")}>
                Oceania
              </Button>
              <Button variant="outline" className={`${mapId === "9" ? "bg-02 text-white" : ""}`} color="blue" onClick={() => handleButton("9")}>
                Asia
              </Button>
              <Button variant="outline" className={`${mapId === "8" ? "bg-02 text-white" : ""}`} color="blue" onClick={() => handleButton("8")}>
                Africa
              </Button>
              <Button variant="outline" className={`${mapId === "7" ? "bg-02 text-white" : ""}`} color="blue" onClick={() => handleButton("7")}>
                Europa
              </Button>
              <Button variant="outline" className={`${mapId === "6" ? "bg-02 text-white" : ""}`} color="blue" onClick={() => handleButton("6")}>
                Sur America
              </Button>
              <Button variant="outline" className={`${mapId === "5" ? "bg-02 text-white" : ""}`} color="blue" onClick={() => handleButton("5")}>
                Norte America
              </Button>
            </div>
          </div>
          <div className="col-12 col-md-7">
            <div id="imap_1" bis_skin_checked="1" className=" overflow-auto">
              <div className="interactive_map_finder with_html_tooltips" id="interactive_map_1" imap="1" bis_skin_checked="1"></div>
            </div>
          </div>
        </div>
      </div>
      <Script src="https://dev.cms-sqmnutrition.somosforma.dev/wp-includes/js/jquery/jquery.min.js?ver=3.7.1" id="jquery-core-js" />
      <Script
        src="https://dev.cms-sqmnutrition.somosforma.dev/wp-content/plugins/InteractiveMapBuilder/js/meisterbox.js?ver=2.0"
        id="interactive_map_builder-meisterbox-js"
      />
      <Script src="https://www.gstatic.com/charts/loader.js?ver=2.0" id="interactive_map_builder-googlejsapi-loader-js" />
      <Script src="https://www.google.com/jsapi?ver=2.0" id="interactive_map_builder-googlejsapi-js" />
      <Script
        src="https://dev.cms-sqmnutrition.somosforma.dev/wp-content/plugins/InteractiveMapBuilder/js/generator.js?ver=2.0"
        id="interactive_map_builder-generator-js"
      />
      <script async defer src={`https://dev.cms-sqmnutrition.somosforma.dev/maps/${mapId}.js`} />;
    </React.Fragment>
  );
};
