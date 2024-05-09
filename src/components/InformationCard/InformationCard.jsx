import style from "./style.module.css";

import Image from "next/image";
import { Button } from "@/components/Button";

export const InformationCard = ({
  imageSrc = "https://fakeimg.pl/800x600/",
  title = "Yodo en nutrición vegetal",
  description = "Description",
  link,
}) => {
  return (
    <article className={`${style.informationCard}`}>
      <div className={`${style.informationCardWrapperImage}`}>
        <Image src={imageSrc} width={261} height={169} alt={title} className={`${style.informationCardImage}`} priority />
      </div>
      <div className={`${style.informationCardBody}`}>
        <h3 className={`${style.informationCardTitle} text-2xl`}>{title}</h3>
        <p className={`${style.informationCardResumen}`}>{description}</p>
        <Button variant="solid" color="blue" href={link.url} target="_self" className="col-12 col-lg-auto">
          {link.text}
        </Button>
      </div>
    </article>
  );
};
