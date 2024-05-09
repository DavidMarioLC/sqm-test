import Image from "next/image";
import { Button } from "@/components/Button";
import style from "./style.module.css";

export const CampaignBanner = ({
  backgroundImage = "",
  productImage = "",
  productName = "ULTRASOL®INE K PLUS",
  productBrand = "marcax",
  link,
  textButton,
}) => {
  return (
    <section className={`${style.campaignBanner} py-56 lg:py-0`}>
      <Image className={style.campaignBannerImage} src={backgroundImage} width={361} height={496} alt={productName} priority />
      <div className="container">
        <div className={style.campaignBannerContent}>
          <Image className={style.campaignBannerProductImage} src={productImage} width={261} height={254} alt={productName} priority quality={50} />
          <div className={`${style.campaignBannerContentName} mb-0`}>
            <p className={`text-2xl lg:text-5xl`}> {productName}</p>
            <p className={`text-md lg:text-xl`}>{productName}</p>
            <Button variant="solid" color="white" href={`/${link}`} target={""} className="col-12 col-lg-auto">
              {textButton}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
