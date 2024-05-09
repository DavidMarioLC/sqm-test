import createMiddleware from "next-intl/middleware";
import { locales, localePrefix, pathnames } from "./navigation";

export function middleware(request) {
  const country = request.cookies.get("country");

  const handleI18nRouting = createMiddleware({
    localePrefix,
    locales,
    pathnames,
    defaultLocale: "es",
  });
  const response = handleI18nRouting(request);

  if (!country) {
    response.cookies.set("country", "mx");
  }

  return response;
}

export const config = {
  matcher: ["/", "/(es|en)/:path*"],
};
