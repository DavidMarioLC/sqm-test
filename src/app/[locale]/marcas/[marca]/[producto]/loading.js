import React from "react";

export default function Loading() {
  return (
    <div className="loadingPage">
      <div>
        <img
          className="loadingPageImage"
          src="/logo-sqm-loading.png"
          alt="Logo de sqm"
          width={55}
          height={55}
        />
        <p className="mt-3">Loading...</p>
      </div>
    </div>
  );
}
