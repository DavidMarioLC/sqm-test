import { Link } from "@/navigation";
import { useLocale } from "next-intl";
import Image from "next/image";
import style from "./style.module.css";
import { useTranslations } from "next-intl";
export const ApplicationCard = ({ image = "", icon = "", title = "title", link }) => {
  const locale = useLocale();
  const t = useTranslations("Application");
  return (
    <Link locale={locale} href={`/aplicaciones?applications=${link}`} className={`${style.applicationCardLink}`}>
      <article className={`${style.applicationCard}`}>
        <div className={`${style.applicationCardWrapperImage}`}>
          <Image src={image} width={261} height={169} alt={title} className={`${style.applicationCardImage}`} quality={50} />
        </div>
        <div className={`${style.applicationCardBody}`}>
          <div className={`${style.applicationCardIcon}`}>
            {icon && <img className={`${style.applicationCardIconImage}`} src={icon} alt="Icono de aplicacion card" />}
          </div>
          <p className={`${style.applicationCardType} text-md`}>{t("type")}</p>
          <h3 className={`${style.applicationCardTitle} text-2xl`}>{title}</h3>
        </div>
      </article>
    </Link>
  );
};
