import React from "react";
import style from "./style.module.css";
import { BsTelephone } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
import { GoLinkExternal } from "react-icons/go";
import { BsPinMap } from "react-icons/bs";
import Link from "next/link";

export const DistributorCard = ({
  logo = "/logo-distribuitor.png",
  name = "Name",
  direction = "Direction",
  phone = "000 000 0000",
  email = "emailexample@gmail.com",
  website = "https://www.webexample.com",
  latitud = "",
  longitud = "",
  changeUbication,
  className,
}) => {
  return (
    <article className={`${style.card} ${className}`}>
      <img className={style.logo} src={logo} alt={name} />
      <h3 className={style.name}>{name}</h3>
      <p className={style.direction}>{direction}</p>
      <ul className={style.list}>
        {phone && (
          <li className={style.item}>
            <BsTelephone className={style.itemIcon} size={18} />
            <Link href={`tel:${phone}`} target="_blank" rel="noopener noreferrer">
              {phone}
            </Link>
          </li>
        )}
        {email && (
          <li className={style.item}>
            <BsEnvelopeAt className={style.itemIcon} size={18} />
            <Link href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
              {email}
            </Link>
          </li>
        )}
        {website && (
          <li className={style.item}>
            <GoLinkExternal className={style.itemIcon} size={18} />
            <Link href={website} target="_blank" rel="noopener noreferrer" className={style.linkWebsite}>
              {website}
            </Link>
          </li>
        )}

        {latitud && longitud && (
          <li className={style.item}>
            <BsPinMap className={style.itemIcon} size={18} />
            <span onClick={changeUbication} className={style.linkMap}>
              Encuéntralo en el mapa
            </span>
          </li>
        )}
      </ul>
    </article>
  );
};
