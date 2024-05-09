import { AcademyVideoCarousel } from "@/components/AcademyVideoCarousel";
import { Button } from "@/components/Button";
import { SimpleBanner } from "@/components/SimpleBanner";
import { Title } from "@/components/Title";
import { VideoCard } from "@/components/VideoCard";
import { cookies } from "next/headers";
import { getFeaturedVideosPage, getLastVideosPage } from "@/services/api";

export const metadata = {
  title: "Academia SQM - Videos",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  const featuredVideos = await getFeaturedVideosPage(language);
  const lastVideos = await getLastVideosPage(language);

  return (
    <main>
      <SimpleBanner title="videos" />
      {featuredVideos.data.length > 0 && (
        <section className="position-relative py-56 ">
          <div className="container">
            <Title level={1} align="center" className="color-02 mb-5">
              Videos destacados
            </Title>

            <AcademyVideoCarousel items={featuredVideos.data} />
          </div>
        </section>
      )}

      <section className="py-56 ">
        <div className="container">
          <Title level={1} align="center" className="color-02 mb-4">
            Últimos videos agregados
          </Title>
          <div className="row g-4">
            {lastVideos.data.map((item) => (
              <div key={item.id} className="col-12 col-md-6 col-lg-4">
                <VideoCard image={item.image} category={item.category} title={item.title} description={item.description} slug={item.slug} />
              </div>
            ))}
          </div>
          <p className="py-5 d-grid col-12 col-md-3 mx-auto">
            <Button variant="solid" color="blue" href={"/academia-sqm/todos-los-videos"}>
              Ver todos los videos
            </Button>
          </p>
        </div>
      </section>
    </main>
  );
}
