import { Open_Sans } from "next/font/google";
import { getMessages } from "next-intl/server";
import "./globals.css";
import { Footer } from "@/components/Footer";
import { cookies } from "next/headers";
import { headers } from "next/headers";
import { HeaderRoot } from "@/components/Header/HeaderRoot";
import { ButtonFixed, ButtonGoToTop } from "@/components/Button/Button";
import { BsChevronUp } from "react-icons/bs";
import { MdOutlineMessage } from "react-icons/md";
import { CookiesPopup } from "@/components/CookiesPopup";
import { NextIntlClientProvider } from "next-intl";

const opensans = Open_Sans({
  weight: ["400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "SQM Specialty Plant Nutrition",
  description:
    "SQM Specialty Plant Nutrition. Balanced nutrition and better yields for your crops.Balanced nutrition and better performance of your crops.",
};

export default async function RootLayout({ params, children }) {
  const messages = await getMessages();

  const country = cookies().get("country")?.value || "MX";
  const language = params.locale;

  const { get } = headers();
  const ua = get("user-agent");
  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  return (
    <html lang={params.locale} className={opensans.className}>
      <body>
        <NextIntlClientProvider messages={messages}>
  {// <HeaderRoot isMobile={isMobile} country={country} language={language} />}
          <ButtonFixed href="/contacto" icon={<MdOutlineMessage />}>
            Contacto
          </ButtonFixed>
          <ButtonGoToTop>
            <BsChevronUp />
          </ButtonGoToTop>
          {children}
          <Footer country={country} language={language} />
          <CookiesPopup />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

