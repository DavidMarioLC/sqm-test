"use client";
import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { BsDownload } from "react-icons/bs";
import { BsShare } from "react-icons/bs";
import { BsThreeDots } from "react-icons/bs";

import Image from "next/image";
import style from "./style.module.css";
import { Button } from "@/components/Button";

import { NextBreadcrumb } from "@/components/NextBreadcrumb";
import parse from "html-react-parser";
import { ShareButtonTooltip } from "../ShareButtonTooltip";

import { useMediaQuery } from "@uidotdev/usehooks";
import Link from "next/link";
import { useTranslations } from "next-intl";

export const ProductDetailSingle = ({ pdf, data }) => {
  const t = useTranslations("Button");
  const tdisponibility = useTranslations("disponibility");
  const isDesktop = useMediaQuery("(min-width : 768px)");
  return (
    <React.Fragment>
      {isDesktop ? (
        <div className={`${style.desktopProductDetail} `}>
          <div className="container">
            <NextBreadcrumb className="breadcrumbDark py-3" />
            <div className={`${style.desktopProductDetailContent} d-flex`}>
              <div className={style.desktopProductDetailWrapperImage}>
                <Image
                  className={style.desktopProductDetailImage}
                  src={data?.productImage ? data?.productImage : ""}
                  alt={data?.productName}
                  width={424}
                  height={467}
                />
              </div>
              <div className={style.desktopProductDetailWrapperInfo}>
                <h1 className={` text-3xl fw-bold  `}>{data?.productBrand} </h1>
                <p className={` text-xl fw-semibold pb-24 mb-0`}>{data?.productName}</p>
                <div className="pb-24 d-flex gap-3">
                  <div className="text-center  d-inline-flex flex-column align-items-center">
                    <Button variant="outline" color="blue" isOnlyIcon href={pdf}>
                      <BsDownload size={18} />
                    </Button>
                    <p>{t("download")}</p>
                  </div>
                  <div className="text-center d-inline-flex flex-column  align-items-center">
                    <ShareButtonTooltip />
                  </div>
                </div>
                <section className="mb-48">{parse(`${data?.productDescription}`)}</section>
                {data?.farmingRelated.items.length > 0 && (
                  <section>
                    <h2 className={`text-sm fw-bold pb-2`}>{data?.farmingRelated?.title}</h2>
                    <ul className="d-flex list-unstyled gap-2 pb-24">
                      {data?.farmingRelated?.items?.map((item, index) => (
                        <li key={item.id}>
                          {item.image ? (
                            <img className={style.farmingRelatedImage} src={item.image ? item.image : ""} alt={item.name} title={item.name} />
                          ) : (
                            <span className={style.farmingRelatedImageEmpty}></span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </section>
                )}
              </div>
            </div>
            <div className={`${style.desktopProductDetailMaxWidthInformation} pt-48 pb-96`}>
              {/* table */}
              {data?.technicalInformation.length > 0 && (
                <section>
                  <h2 className={`text-md fw-bold py-3 border-top border-bottom`}>{data?.technicalInformation[0].title}</h2>
                  <table className="w-100 mb-3">
                    <tbody>
                      {data?.technicalInformation[0].items.map(
                        (item, index) =>
                          item.name && (
                            <tr key={item.id} className="d-flex w-100 justify-between py-2  border-bottom">
                              <td className="text-md fw-bold w-50 ps-48">{parse(`${item.name}`)}</td>
                              <td className="w-50 ps-48">{parse(`${item.value}`)}</td>
                            </tr>
                          )
                      )}
                    </tbody>
                  </table>
                  <p className="text-gray-low text-xs">
                    {`* ${tdisponibility("text")} :`} {data?.disponibility.country}{" "}
                    <img width={16} height={12} src={data.disponibility.flag} alt="title t2" />
                  </p>
                </section>
              )}

              {/* buttons */}

              <div className="d-flex  align-items-start gap-4">
                {data?.files.hasOwnProperty("folleto") && (
                  <div className="d-flex flex-column gap-2">
                    {data?.files.folleto.map((file, idx) => (
                      <Button key={file + idx} variant="outline" color="blue" className="px-4 " href={file} target="_blank">
                        {t("downloadBrochure")} ({idx + 1}) <BsDownload size={18} />
                      </Button>
                    ))}
                  </div>
                )}

                {data?.files.hasOwnProperty("hoja_seguridad") && (
                  <div className="d-flex flex-column gap-2">
                    {data.files.hoja_seguridad.map((file, idx) => (
                      <Button key={file + idx} variant="outline" color="blue" className="px-4 " href={file} target="_blank">
                        {t("downloadSheet")} ({idx + 1})
                        <BsDownload size={18} />
                      </Button>
                    ))}
                  </div>
                )}

                {data?.files.hasOwnProperty("hoja") && (
                  <div className="d-flex flex-column gap-2">
                    {data?.files.hoja.map((file, idx) => (
                      <Button key={file + idx} variant="outline" color="blue" className="px-4 " href={file} target="_blank">
                        {t("downloadTechnique")} ({idx + 1}) <BsDownload size={18} />
                      </Button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className={`${style.mobileProductDetail} `}>
          <section className={style.mobileBanner}>
            <NextBreadcrumb className="breadcrumbDark py-3 container" />
            <div className="container d-flex justify-content-center align-items-center">
              <Image className={style.productImage} src={data?.productImage} width={329} height={415} alt={data?.productName} />
            </div>
          </section>
          <div className="container pb-56">
            <section className="py-24">
              <h1 className={`text-center text-3xl fw-bold `}>{data?.productBrand} </h1>
              <p className={`text-center text-xl fw-semibold pb-24`}>{data?.productName}</p>
              <div className="pb-24 d-flex gap-3">
                <div className="text-center  d-inline-flex flex-column align-items-center">
                  <Button variant="outline" color="blue" href={pdf} isOnlyIcon>
                    <BsDownload size={18} />
                  </Button>
                  <p>{t("download")}</p>
                </div>
                <div className="text-center d-inline-flex flex-column  align-items-center">
                  <ShareButtonTooltip />
                </div>
              </div>
              <section>{parse(`${data?.productDescription}`)}</section>
            </section>
            <section>
              <h2 className={`text-sm fw-bold pb-2`}>{data?.farmingRelated.title}</h2>
              <ul className="d-flex list-unstyled gap-2 pb-24">
                {data?.farmingRelated.items.map((item, index) => (
                  <li key={item.id}>
                    <img className={style.farmingRelatedImage} src={item.image ? item.image : ""} alt="asdas" />
                  </li>
                ))}
              </ul>
            </section>
            <section>
              {data.technicalInformation.length > 0 && (
                <React.Fragment>
                  <h2 className={`text-md fw-bold py-3 border-top border-bottom`}>{data?.technicalInformation.title}</h2>
                  <table className="w-100 mb-3">
                    <tbody>
                      {data?.technicalInformation?.items?.map((item, index) => (
                        <tr key={item.id} className="d-flex w-100 justify-between py-2  border-bottom">
                          <td className={`text-md fw-bold`}>{item.name}:</td>
                          <td>{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </React.Fragment>
              )}

              <p className="text-gray-low text-xs">
                {`* ${tdisponibility("text")} :`} {data?.disponibility.country}{" "}
                <img width={16} height={12} src={data?.disponibility.flag ? data?.disponibility.flag : ""} alt="title t2" />
              </p>
              <div className="d-flex justify-content-end align-items-start gap-2">
                {data?.files.hasOwnProperty("folleto") && (
                  <Button target="_blank" href={data?.files.folleto[0]} variant="outline" color="blue" className="px-4 flex-grow-1">
                    {t("downloadBrochure")} <BsDownload size={18} />
                  </Button>
                )}

                <a data-tooltip-id="my-tooltip-documents" className={style.buttonMoreFiles}>
                  <BsThreeDots size={18} />
                </a>
                <Tooltip place="bottom-start" id="my-tooltip-documents" clickable className={style.buttonMoreFilesTooltip}>
                  <div>
                    <p className="text-black fw-semibold text-lg">{t("moreOptions")}</p>
                    <ul className=" list-unstyled d-flex flex-column justify-center gap-2">
                      {data?.files.hasOwnProperty("hoja_seguridad") && (
                        <li className="d-flex gap-2 align-items-center">
                          <BsDownload color="#0da600" />
                          <Link href={data?.files.hoja_seguridad[0]} className={style.buttonMoreFilesPdf}>
                            {t("downloadSheet")}
                          </Link>
                        </li>
                      )}

                      {data?.files.hasOwnProperty("hoja") && (
                        <li className="d-flex gap-2 align-items-center">
                          <BsDownload color="#0da600" />
                          <Link href={data?.files.hoja[0]} className={style.buttonMoreFilesPdf}>
                            {t("downloadTechnique")}
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                </Tooltip>
              </div>
            </section>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};
