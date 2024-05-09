import { cookies } from "next/headers";
import { notFound } from "next/navigation";

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;

  return notFound();
}
