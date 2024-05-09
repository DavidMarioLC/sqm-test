import { SimpleBanner } from "@/components/SimpleBanner";
import { cookies } from "next/headers";
import parse from "html-react-parser";
import Script from "next/script";
import { SqmMap } from "@/components/SqmMap";

export const metadata = {
  title: "SQM para el mundo",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  return (
    <main>
      <SimpleBanner title="Nutrición Vegetal de Especialidad en el Mundo" />
      <section>
        <SqmMap />
      </section>
    </main>
  );
}
