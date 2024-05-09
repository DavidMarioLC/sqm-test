import { ClientOnly } from "@/components/ClientOnly";
import { ListVideos } from "@/components/ListVideos";
import { SimpleBanner } from "@/components/SimpleBanner";
import { Title } from "@/components/Title";
import { cookies } from "next/headers";

export const metadata = {
  title: "Academia SQM - Todos los videos",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  return (
    <main>
      <SimpleBanner title="Todos los videos" />
      <section className="py-56 ">
        <div className="container">
          <ClientOnly>
            <ListVideos country={country} language={language} />
          </ClientOnly>
        </div>
      </section>
    </main>
  );
}
