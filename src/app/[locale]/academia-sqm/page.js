import { AcademyBookCarousel } from "@/components/AcademyBookCarousel";
import { AcademyCardCarousel } from "@/components/AcademyCardCarousel";
import { Button } from "@/components/Button";
import { ColorBanner } from "@/components/ColorBanner";
import { SimpleBanner } from "@/components/SimpleBanner";
import { Title } from "@/components/Title";
import { cookies } from "next/headers";
import { getVideoCategoriesPage, getVideoFeaturedPageAcademy } from "@/services/api";
import { SubLinksNavigation } from "@/components/SubLinksNavigation";

export const metadata = {
  title: "SQM - Academia",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  const videoCategories = await getVideoCategoriesPage(language);
  const featuredBooks = await getVideoFeaturedPageAcademy(language);

  return (
    <main>
      <SimpleBanner title="Academia SQM" />
      <section className="py-48 lg:pb-96 position-relative">
        <div className="container">
          <h2 className="mb-2 text-xl fw-bold text-center">Explora nuestro contenido</h2>
          <SubLinksNavigation />
          <hr className="border" />
          <Title level={2} className="color-02 my-5" align="center">
            Conoce nuestras categorías de videos de SQM Nutrition
          </Title>
          <AcademyCardCarousel items={videoCategories.data} />
        </div>
      </section>
      <section className="py-56 lg:py-96 position-relative bg-gray">
        <div className="container">
          <Title level={2} className="color-02 mb-5" align="center">
            Libros destacados
          </Title>
          <AcademyBookCarousel items={featuredBooks.data} />
          <p className="text-center">
            <Button variant="outline" color="blue" href={"/libros"} target="_blank">
              Ver todos los libros
            </Button>
          </p>
        </div>
      </section>
    </main>
  );
}
