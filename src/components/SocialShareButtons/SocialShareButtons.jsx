"use client";
import React from "react";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, EmailShareButton, LinkedinShareButton } from "react-share";
import style from "./style.module.css";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import { BsTwitterX } from "react-icons/bs";
export const SocialShareButtons = () => {
  const [link, setLink] = React.useState("");

  React.useEffect(() => {
    const url = window.location.href;
    if (url) {
      setLink(url);
    }
  }, []);
  return (
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
  );
};
