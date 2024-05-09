import { NextBreadcrumb } from "@/components/NextBreadcrumb";
import { VideoSingle } from "@/components/VideoSingle";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";

import { getSingleVideo } from "@/services/api";

export default async function Page({ params }) {
  const cookieStore = cookies();
  const country = cookieStore.get("country").value;
  const language = params.locale;
  const slug = params.video;

  const { data, error } = await getSingleVideo(slug, language);

  if (error) {
    notFound();
  }

  return (
    <main>
      <div className="container pb-5">
        <NextBreadcrumb className="breadcrumbDark py-4" />
        <VideoSingle data={data[0]} />
      </div>
    </main>
  );
}
