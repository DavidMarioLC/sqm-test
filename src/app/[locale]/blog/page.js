import { ClientOnly } from "@/components/ClientOnly";
import { ExpertsCarousel } from "@/components/ExpertsCarousel";
import { ListPost } from "@/components/ListPost";
import { SimpleBanner } from "@/components/SimpleBanner";
import { GridSkeletonArticleCard } from "@/components/Skeleton";
import { Title } from "@/components/Title";
import { getOursExperts } from "@/services/api";
import { cookies } from "next/headers";

export const metadata = {
  title: "SQM - Blog",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const experts = await getOursExperts(language);

  return (
    <main>
      <SimpleBanner title="Blog" />
      <section className="container py-3 py-md-5">
        <hr className="border d-none d-lg-block" />
        <ClientOnly>
          <ListPost country={country} language={language} />
        </ClientOnly>
      </section>
      <section className="position-relative py-56 lg:py-96 bg-gray">
        <div className="container">
          <Title level={2} align="center" className="text-2xl lg:text-5xl">
            Nuestros expertos
          </Title>
          <ExpertsCarousel experts={experts.data} />
        </div>
      </section>
    </main>
  );
}
