import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import style from "./style.module.css";

export const CategoryCard = ({ image = "", title = "title", link }) => {
  const locale = useLocale();
  return (
    <Link locale={locale} href={`/categorias?categories=${link}`} className={`${style.categoryCardLink}`}>
      <article className={`${style.categoryCard}`}>
        <div className={`${style.categoryCardWrapperImage}`}>
          <Image src={image} width={261} height={169} alt={title} className={`${style.categoryCardImage}`} quality={50} />
        </div>
        <div className={`${style.categoryCardBody}`}>
          <p className={`${style.categoryCardType} text-md`}>Tipo de aplicación</p>
          <h3 className={`${style.categoryCardTitle} text-2xl`}>{title}</h3>
        </div>
      </article>
    </Link>
  );
};
