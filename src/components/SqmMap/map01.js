const map_generator = {
  maps: {
    1: {
      id: 1,
      options: {
        backgroundColor: {
          fill: "#ffffff",
          stroke: "#666666",
          strokeWidth: "0",
        },
        colorAxis: {
          minValue: "1",
          maxValue: "1",
          colors: ["#666666"],
        },
        datalessRegionColor: "#f5f5f5",
        displayMode: "markers",
        enableRegionInteractivity: "true",
        height: "600",
        keepAspectRatio: "true",
        legend: "none",
        region: "009",
        magnifyingGlass: {
          enable: "true",
          zoomFactor: "5",
        },
        markerOpacity: 0.7,
        resolution: "countries",
        sizeAxis: {
          maxSize: "4",
          maxValue: "6",
          minSize: "4",
          minValue: "6",
        },
        tooltip: {
          textStyle: {
            color: "#000000",
            fontName: "<global-font-name>",
            fontSize: "<global-font-size>",
          },
          trigger: "focus",
          isHtml: "true",
        },
        width: "850",
        animation: {
          duration: "1000",
          easing: "out",
        },
      },
      gtable: {
        cols: [
          {
            id: "",
            label: "Latitude",
            pattern: "",
            type: "number",
          },
          {
            id: "",
            label: "Longitude",
            pattern: "",
            type: "number",
          },
          {
            id: "",
            label: "Name",
            pattern: "",
            type: "string",
          },
          {
            id: "",
            label: "Color",
            pattern: "",
            type: "number",
          },
          {
            id: "",
            label: "Size",
            pattern: "",
            type: "number",
          },
          {
            id: "",
            label: "Tooltip",
            pattern: "",
            type: "string",
            p: {
              role: "tooltip",
              html: "true",
            },
          },
        ],
        rows: [],
      },
      actions: [],
      javascript: "",
      cssid: "imap_1",
    },
  },
};
