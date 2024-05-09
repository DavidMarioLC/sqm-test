import { ClientOnly } from "@/components/ClientOnly";
import { ListBooks } from "@/components/ListBooks";
import { SimpleBanner } from "@/components/SimpleBanner";
import { cookies } from "next/headers";

export const metadata = {
  title: "Academia SQM - Libros",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  return (
    <main>
      <SimpleBanner title="Libros" color="#002574" />
      <section className="container py-4">
        <ClientOnly>
          <ListBooks country={country} language={language} />
        </ClientOnly>
      </section>
    </main>
  );
}
