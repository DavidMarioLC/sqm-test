import Image from "next/image";
import style from "./style.module.css";
import { IoDocumentTextOutline } from "react-icons/io5";
import Link from "next/link";

export const MostViewCard = ({ title = "", image = "", link = "#" }) => {
  return (
    <Link className={style.mostViewCardLink} href={`/articulos/${link}`} target="_self">
      <article className={style.mostViewCard}>
        <div className={style.mostViewCardWrapperImage}>
          <Image
            src={image}
            alt={title}
            width={90}
            height={90}
            className={style.mostViewCardImage}
            quality={50}
          />
        </div>
        <div className={style.mostViewCardBody}>
          <p className={`${style.mostViewCardTag} text-sm mb-md-4`}>
            <IoDocumentTextOutline />
            Artículos y ensayos
          </p>
          <p className={`${style.mostViewCardResumen} text-md lg:text-lg`}>{title}</p>
        </div>
      </article>
    </Link>
  );
};
