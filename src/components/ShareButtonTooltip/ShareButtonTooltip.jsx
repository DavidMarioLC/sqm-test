"use client";
import React from "react";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton, LinkedinShareButton } from "react-share";
import style from "./style.module.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import { TfiEmail } from "react-icons/tfi";
import { BsShare } from "react-icons/bs";
import { useTranslations } from "next-intl";
export const ShareButtonTooltip = () => {
  const [link, setLink] = React.useState("");
  const t = useTranslations("Button");
  React.useEffect(() => {
    const url = window.location.href;
    if (url) {
      setLink(url);
    }
  }, []);

  return (
    <React.Fragment>
      <a data-tooltip-id="my-tooltip" className={style.buttonShared}>
        <BsShare size={18} />
      </a>
      {t("share")}
      <Tooltip id="my-tooltip" clickable style={{ background: "#ffffff", paddingTop: "16px" }} border="1px solid black">
        <div>
          <ul className=" list-unstyled d-flex justify-center gap-2">
            <li>
              <TwitterShareButton className={style.socials} url={link}>
                <BsTwitterX />
              </TwitterShareButton>
            </li>
            <li>
              <FacebookShareButton className={style.socials} url={link}>
                <FaFacebookF />
              </FacebookShareButton>
            </li>
            <li>
              <WhatsappShareButton className={style.socials} url={link}>
                <FaWhatsapp />
              </WhatsappShareButton>
            </li>
            <li>
              <EmailShareButton className={style.socials} url={link}>
                <TfiEmail />
              </EmailShareButton>
            </li>
            <li>
              <LinkedinShareButton className={style.socials} url={link}>
                <FaLinkedinIn />
              </LinkedinShareButton>
            </li>
          </ul>
        </div>
      </Tooltip>
    </React.Fragment>
  );
};
