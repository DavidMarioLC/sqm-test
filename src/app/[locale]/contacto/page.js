import { ContactForm } from "@/components/ContactForm";
import { SimpleBanner } from "@/components/SimpleBanner";
import { cookies } from "next/headers";

export const metadata = {
  title: "SQM - Contacto",
};

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  return (
    <main>
      <SimpleBanner title="Contacto" />
      <div className="container">
        <ContactForm />
      </div>
    </main>
  );
}
